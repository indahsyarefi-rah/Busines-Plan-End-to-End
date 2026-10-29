import {
  PALETTES,
  VISUAL_NAMES,
  visualTheme,
  allocationRows,
} from "./visual-model.js";
import { renderVisual } from "./visual-render.js";
import { exportVisual, preparePersonaPhoto } from "./visual-export.js";

export function createVisualPlans(React, runtime, calculateFinance) {
  const { jsx: h, jsxs: hs } = runtime;
  function field(label, control, key = label) {
    return hs("label", { className: "field", children: [label, control] }, key);
  }
  return function PlanVisuals({ plan, onChange, mode }) {
    const [selection, setSelection] = React.useState("vpc");
    const [page, setPage] = React.useState(0);
    const [zoom, setZoom] = React.useState(false);
    const [busy, setBusy] = React.useState("");
    const [error, setError] = React.useState("");
    const [photoBusy, setPhotoBusy] = React.useState(false);
    const [photoError, setPhotoError] = React.useState("");
    const latest = React.useRef(plan);
    latest.current = plan;
    const type =
      mode === "value" ? selection : mode === "market" ? "persona" : "finance";
    const theme = visualTheme(plan, type);
    const visual = React.useMemo(
      () => renderVisual(plan, type, calculateFinance),
      [plan, type],
    );
    const current = Math.min(page, visual.pages.length - 1);
    function update(patch, section) {
      const p = latest.current;
      onChange({
        ...p,
        ...patch,
        updatedAt: new Date().toISOString(),
        ...(section
          ? {
              sections: Object.fromEntries(
                Object.entries(p.sections).map(([key, value]) => [
                  key,
                  key === section
                    ? { ...value, status: "Draf", review: false }
                    : value.status !== "Belum diisi"
                      ? { ...value, review: true }
                      : value,
                ]),
              ),
            }
          : {}),
      });
    }
    function setTheme(patch) {
      const p = latest.current;
      update({
        visualSettings: {
          ...p.visualSettings,
          [type]: { ...p.visualSettings?.[type], ...patch },
        },
      });
    }
    function persona(patch) {
      update({ persona: { ...latest.current.persona, ...patch } }, "market");
    }
    function details(patch) {
      update(
        { financialDetails: { ...latest.current.financialDetails, ...patch } },
        "finance",
      );
    }
    async function download(format) {
      setBusy(format);
      setError("");
      try {
        await exportVisual(visual, type, format, plan.id);
      } catch {
        setError("Unduhan gagal. Isian tetap tersimpan; coba lagi.");
      } finally {
        setBusy("");
      }
    }
    const personaData = plan.persona || {};
    function personaEditor() {
      const short = [
        ["name", "Nama persona", 60],
        ["role", "Peran / segmen persona", 120],
        ["age", "Usia persona", 40],
        ["location", "Lokasi persona", 100],
        ["education", "Pendidikan persona", 100],
        ["occupation", "Pekerjaan persona", 100],
        ["phone", "Telepon persona", 80],
        ["email", "Email persona", 120],
      ];
      return hs("details", {
        className: "visual-editor",
        open: true,
        children: [
          h("summary", { children: "Isi User Persona" }),
          h("p", {
            className: "small-text",
            children:
              "Persona adalah gambaran pelanggan dari input Anda; tandai asumsi yang belum didukung riset. Foto disimpan di browser ini dan ikut pada PNG/PDF.",
          }),
          h("div", {
            className: "form-grid",
            children: short.map(([key, label, maxLength]) =>
              field(
                label,
                h("input", {
                  "aria-label": label,
                  maxLength,
                  value: personaData[key] || "",
                  onChange: (e) => persona({ [key]: e.target.value }),
                }),
              ),
            ),
          }),
          field(
            "Foto persona",
            h("input", {
              "aria-label": "Foto persona",
              type: "file",
              accept: "image/jpeg,image/png,image/webp",
              disabled: photoBusy,
              onChange: async (e) => {
                const file = e.currentTarget.files?.[0];
                e.currentTarget.value = "";
                if (!file) return;
                setPhotoBusy(true);
                setPhotoError("");
                try {
                  persona({ photo: await preparePersonaPhoto(file) });
                } catch (err) {
                  setPhotoError(err.message);
                } finally {
                  setPhotoBusy(false);
                }
              },
            }),
          ),
          photoBusy && h("p", { role: "status", children: "Menyiapkan foto…" }),
          photoError &&
            h("p", {
              className: "notice error",
              role: "alert",
              children: photoError,
            }),
          personaData.photo &&
            h("button", {
              type: "button",
              className: "secondary",
              onClick: () => persona({ photo: "" }),
              children: "Hapus foto persona",
            }),
          h("div", {
            className: "form-grid",
            children: [
              ["bio", "Biodata persona"],
              ["goals", "Goals / tujuan persona"],
              ["frustrations", "Frustrations / hambatan persona"],
              ["brands", "Favorite brands persona"],
            ].map(([key, label]) =>
              field(
                label,
                h("textarea", {
                  "aria-label": label,
                  rows: 4,
                  maxLength: 12000,
                  value: personaData[key] || "",
                  onChange: (e) => persona({ [key]: e.target.value }),
                }),
              ),
            ),
          }),
          ...[
            ["traits", "Personality", 100, 4],
            ["skills", "Skills", 5, 5],
          ].map(([key, label, max, limit]) =>
            hs(
              "fieldset",
              {
                className: "visual-metrics-editor",
                children: [
                  h("legend", { children: label }),
                  ...(personaData[key] || []).map((row, i) =>
                    hs(
                      "div",
                      {
                        className: "visual-input-row",
                        children: [
                          field(
                            `${label} ${i + 1}`,
                            h("input", {
                              "aria-label": `${label} ${i + 1}`,
                              maxLength: 30,
                              value: row.label,
                              onChange: (e) =>
                                persona({
                                  [key]: personaData[key].map((v, j) =>
                                    j === i
                                      ? { ...v, label: e.target.value }
                                      : v,
                                  ),
                                }),
                            }),
                          ),
                          field(
                            `${label === "Skills" ? "Nilai 0–5" : "Persentase"} ${i + 1}`,
                            h("input", {
                              "aria-label": `${label === "Skills" ? "Nilai 0–5" : "Persentase"} ${i + 1}`,
                              type: "number",
                              min: 0,
                              max,
                              step: 1,
                              value: row.value ?? "",
                              onChange: (e) =>
                                persona({
                                  [key]: personaData[key].map((v, j) =>
                                    j === i
                                      ? {
                                          ...v,
                                          value:
                                            e.target.value === ""
                                              ? null
                                              : Math.max(
                                                  0,
                                                  Math.min(
                                                    max,
                                                    Math.round(
                                                      Number(e.target.value),
                                                    ),
                                                  ),
                                                ),
                                        }
                                      : v,
                                  ),
                                }),
                            }),
                          ),
                          h("button", {
                            type: "button",
                            className: "secondary",
                            "aria-label": `Hapus ${label} ${i + 1}`,
                            onClick: () =>
                              persona({
                                [key]: personaData[key].filter(
                                  (_, j) => j !== i,
                                ),
                              }),
                            children: "Hapus",
                          }),
                        ],
                      },
                      row.id,
                    ),
                  ),
                  h("button", {
                    type: "button",
                    className: "secondary",
                    disabled: (personaData[key] || []).length >= limit,
                    onClick: () =>
                      persona({
                        [key]: [
                          ...(personaData[key] || []),
                          { id: crypto.randomUUID(), label: "", value: null },
                        ],
                      }),
                    children: `Tambah ${label}`,
                  }),
                ],
              },
              key,
            ),
          ),
        ],
      });
    }
    function financeEditor() {
      return hs("details", {
        className: "visual-editor",
        children: [
          h("summary", { children: "Rincian dashboard keuangan" }),
          h("p", {
            className: "small-text",
            children:
              "Dashboard memakai proyeksi 12 bulan yang sama dengan tabel dan laporan. OPEX merinci biaya tetap bulanan; CAPEX merinci pengeluaran awal. Rincian tidak menambah biaya baru.",
          }),
          field(
            "Diskonto tahunan (%)",
            h("input", {
              "aria-label": "Diskonto tahunan (%)",
              type: "number",
              min: 0,
              max: 100,
              step: 0.1,
              value:
                plan.financialDetails?.discount === undefined
                  ? 10
                  : (plan.financialDetails.discount ?? ""),
              onChange: (e) =>
                details({
                  discount:
                    e.target.value === ""
                      ? null
                      : Math.max(0, Math.min(100, Number(e.target.value))),
                }),
            }),
          ),
          ...[
            ["opex", "OPEX", plan.finance.fixed],
            ["capex", "CAPEX", plan.finance.startup],
          ].map(([key, label, total]) => {
            const rows = plan.financialDetails?.[key] || [];
            const allocated = allocationRows(rows, Number(total) || 0);
            return hs(
              "fieldset",
              {
                className: "visual-metrics-editor",
                children: [
                  h("legend", { children: label }),
                  ...rows.map((row, i) =>
                    hs(
                      "div",
                      {
                        className: "visual-input-row",
                        children: [
                          field(
                            `Kategori ${label} ${i + 1}`,
                            h("input", {
                              "aria-label": `Kategori ${label} ${i + 1}`,
                              maxLength: 40,
                              value: row.label,
                              onChange: (e) =>
                                details({
                                  [key]: rows.map((v, j) =>
                                    j === i
                                      ? { ...v, label: e.target.value }
                                      : v,
                                  ),
                                }),
                            }),
                          ),
                          field(
                            `Nilai ${label} ${i + 1} (Rp)`,
                            h("input", {
                              "aria-label": `Nilai ${label} ${i + 1} (Rp)`,
                              type: "number",
                              min: 0,
                              step: "any",
                              value: row.amount ?? "",
                              onChange: (e) =>
                                details({
                                  [key]: rows.map((v, j) =>
                                    j === i
                                      ? {
                                          ...v,
                                          amount:
                                            e.target.value === ""
                                              ? null
                                              : Math.max(
                                                  0,
                                                  Number(e.target.value),
                                                ),
                                        }
                                      : v,
                                  ),
                                }),
                            }),
                          ),
                          h("button", {
                            type: "button",
                            className: "secondary",
                            "aria-label": `Hapus ${label} ${i + 1}`,
                            onClick: () =>
                              details({
                                [key]: rows.filter((_, j) => j !== i),
                              }),
                            children: "Hapus",
                          }),
                        ],
                      },
                      row.id,
                    ),
                  ),
                  !allocated.valid &&
                    h("p", {
                      className: "notice error",
                      role: "alert",
                      children: `Rincian ${label} melebihi total asumsi. Sesuaikan rincian atau total di formulir asumsi.`,
                    }),
                  h("button", {
                    type: "button",
                    className: "secondary",
                    disabled: rows.length >= 6,
                    onClick: () =>
                      details({
                        [key]: [
                          ...rows,
                          { id: crypto.randomUUID(), label: "", amount: null },
                        ],
                      }),
                    children: `Tambah komponen ${label}`,
                  }),
                ],
              },
              key,
            );
          }),
          h("p", {
            className: "small-text",
            children:
              "Diskonto awal 10% adalah asumsi yang bisa diubah. NPV dan payback memakai investasi awal serta kas operasi selama 12 bulan; IRR hanya tersedia untuk arus kas konvensional. Tidak ada nilai terminal.",
          }),
        ],
      });
    }
    return hs("section", {
      className: "plan-visuals",
      "aria-label": `Visual ${mode === "value" ? "Value Proposition dan Customer Profile" : VISUAL_NAMES[type]}`,
      children: [
        hs("div", {
          className: "visual-section-heading",
          children: [
            h("div", {
              children: [
                h("div", {
                  className: "eyebrow",
                  children: "VISUAL WORKSPACE",
                }),
                h("h3", {
                  children:
                    mode === "value"
                      ? "Value Proposition & Customer Profile"
                      : VISUAL_NAMES[type],
                }),
              ],
            }),
            h("span", {
              className: "visual-live",
              children: "Pratinjau langsung",
            }),
          ],
        }),
        h("p", {
          className: "small-text",
          children:
            mode === "value"
              ? "Visual mengikuti enam isian Value Proposition Canvas di bawah. Pilih VPC lengkap atau unduh masing-masing sisi secara terpisah."
              : type === "persona"
                ? "Susun persona dengan foto, biodata, tujuan, karakter, dan keterampilan."
                : "Grafik, ringkasan laba, dan indikator kelayakan mengikuti angka asumsi Anda secara langsung.",
        }),
        mode === "value" &&
          h("div", {
            className: "visual-tabs",
            role: "group",
            "aria-label": "Jenis visual VPC",
            children: ["vpc", "value", "profile"].map((key) =>
              h(
                "button",
                {
                  type: "button",
                  "aria-pressed": selection === key,
                  className: selection === key ? "selected" : "",
                  onClick: () => {
                    setSelection(key);
                    setPage(0);
                    setError("");
                  },
                  children: key === "vpc" ? "VPC lengkap" : VISUAL_NAMES[key],
                },
                key,
              ),
            ),
          }),
        h("details", {
          className: "visual-appearance",
          children: [
            h("summary", {
              children: `Warna & ukuran teks ${VISUAL_NAMES[type]}`,
            }),
            h("div", {
              className: "visual-palettes",
              role: "group",
              "aria-label": `Tema ${VISUAL_NAMES[type]}`,
              children: Object.entries(PALETTES).map(([key, palette]) =>
                hs(
                  "button",
                  {
                    type: "button",
                    "aria-pressed":
                      (plan.visualSettings?.[type]?.palette || "purple") ===
                      key,
                    onClick: () => setTheme({ ...palette, palette: key }),
                    children: [
                      h("span", {
                        className: "visual-swatch",
                        style: { backgroundColor: palette.primary },
                        "aria-hidden": true,
                      }),
                      palette.label,
                    ],
                  },
                  key,
                ),
              ),
            }),
            h("div", {
              className: "visual-color-grid",
              children: [
                ...["primary", "secondary", "accent", "background", "text"].map(
                  (key, i) =>
                    field(
                      [
                        "Warna utama",
                        "Warna kedua",
                        "Warna aksen",
                        "Warna latar visual",
                        "Warna teks visual",
                      ][i],
                      h("input", {
                        type: "color",
                        "aria-label": `${["Warna utama", "Warna kedua", "Warna aksen", "Warna latar visual", "Warna teks visual"][i]} ${VISUAL_NAMES[type]}`,
                        value: theme[key],
                        onChange: (e) => setTheme({ [key]: e.target.value }),
                      }),
                    ),
                ),
                type !== "finance" &&
                  field(
                    "Ukuran teks visual",
                    h("select", {
                      "aria-label": `Ukuran teks ${VISUAL_NAMES[type]}`,
                      value: theme.fontSize,
                      onChange: (e) =>
                        setTheme({ fontSize: Number(e.target.value) }),
                      children: Array.from({ length: 11 }, (_, i) =>
                        h(
                          "option",
                          { value: i + 14, children: `${i + 14} px` },
                          i,
                        ),
                      ),
                    }),
                  ),
              ],
            }),
          ],
        }),
        hs("div", {
          className: "visual-export-actions",
          children: [
            h("button", {
              type: "button",
              className: "secondary",
              disabled: !!busy || photoBusy,
              onClick: () => download("PNG"),
              children:
                busy === "PNG"
                  ? "Membuat PNG…"
                  : `Unduh ${VISUAL_NAMES[type]} PNG`,
            }),
            h("button", {
              type: "button",
              className: "secondary",
              disabled: !!busy || photoBusy,
              onClick: () => download("PDF"),
              children:
                busy === "PDF"
                  ? "Membuat PDF…"
                  : `Unduh ${VISUAL_NAMES[type]} PDF`,
            }),
          ],
        }),
        error &&
          h("p", { role: "alert", className: "notice error", children: error }),
        visual.pages.length > 1 &&
          h("p", {
            role: "status",
            className: "notice",
            children: `Isi memerlukan ${visual.pages.length} halaman. PDF menyertakan semuanya; PNG diunduh per halaman. Browser mungkin meminta izin unduhan beberapa file.`,
          }),
        visual.pages.length > 1 &&
          field(
            "Halaman visual",
            h("select", {
              "aria-label": `Halaman ${VISUAL_NAMES[type]}`,
              value: current,
              onChange: (e) => setPage(Number(e.target.value)),
              children: visual.pages.map((_, i) =>
                h(
                  "option",
                  {
                    value: i,
                    children: `Halaman ${i + 1} dari ${visual.pages.length}`,
                  },
                  i,
                ),
              ),
            }),
          ),
        h("button", {
          type: "button",
          className: "text-link",
          "aria-pressed": zoom,
          onClick: () => setZoom(!zoom),
          children: zoom
            ? "Sesuaikan pratinjau ke layar"
            : "Perbesar pratinjau",
        }),
        h("div", {
          className: `visual-preview ${zoom ? "is-zoomed" : ""}`,
          children: h("img", {
            src:
              "data:image/svg+xml;charset=utf-8," +
              encodeURIComponent(visual.pages[current]),
            alt: `${VISUAL_NAMES[type]} untuk ${plan.name}, halaman ${current + 1}`,
            width: visual.width,
            height: visual.height,
          }),
        }),
        h("p", {
          className: "small-text",
          children:
            "PNG dan PDF visual mengikuti tema pratinjau. Teks panjang dilanjutkan ke halaman berikutnya; isian lengkap dapat dibaca di formulir. PDF visual berisi gambar.",
        }),
        type === "persona" && personaEditor(),
        type === "finance" && financeEditor(),
      ],
    });
  };
}
