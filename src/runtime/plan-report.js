import { visualReportSections } from "./visual-model.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/exceljs.js",
      "assets/app.js",
      "assets/base.css",
      "assets/jspdf.js",
    ]),
) => i.map((i) => d[i]);
import { p as P, _ as f, f as w, s as B } from "./app.js";
import { safeCell as v } from "./report.js";
async function j(i, R) {
  const p = [B.at(-1), ...B.slice(0, -1)],
    c = [
      ["Nama", i.name],
      ["Proyek asal", i.sourceProject],
      ["Masalah asal", i.sourceProblem.origin?.sourceId || i.sourceProblem.id],
      ["Pembaruan", i.updatedAt],
      [
        "Batasan",
        "Draf perencanaan, bukan bukti kelayakan usaha. Informasi kosong belum tersedia. Sumber impor belum diperiksa ulang. Status siap ditinjau tidak berarti tervalidasi.",
      ],
    ],
    g = p.map((n) => ({
      title: `${n.number}. ${n.name}`,
      rows: [
        [
          "Status",
          i.sections[n.id].status +
            (i.sections[n.id].review ? " — perlu ditinjau ulang" : ""),
        ],
        ...n.fields.map((s, t) => [
          s,
          i.sections[n.id].values[t] || "Belum tersedia.",
        ]),
        ["Sumber", i.sections[n.id].source || "Belum tersedia."],
        [
          "Asumsi dan kekurangan data",
          i.sections[n.id].assumptions || "Belum diisi.",
        ],
        ["Validasi", i.sections[n.id].validation || "Belum dilakukan."],
        ["Catatan", i.sections[n.id].notes || "Belum diisi."],
      ],
    })),
    r = P(i.finance);
  if (
    (c.push([
      "Cakupan kalkulator",
      "Model sederhana: tidak mencakup depresiasi, bunga/pinjaman, persediaan, dan rincian pajak. Pajak bulanan adalah asumsi pengguna. Volume dibatasi kapasitas; laba berbeda dari kas.",
    ]),
    r)
  ) {
    c.push([
      "Titik impas bulanan",
      r.breakEven === null
        ? "Tidak tercapai pada margin saat ini"
        : `${r.breakEven} unit${r.breakEven > i.finance.capacity ? " — melebihi kapasitas" : ""}`,
    ]);
    for (const [n, s] of [
      ["Konservatif", 0.7],
      ["Dasar", 1],
      ["Optimistis", 1.3],
    ]) {
      const t = P(i.finance, s);
      c.push([
        `Skenario ${n} (volume ${s * 100}%, ilustratif)`,
        `Pendapatan 12 bulan Rp ${t.totalRevenue}; laba sederhana Rp ${t.totalProfit}; kekurangan kas maksimum Rp ${Math.max(0, -t.minimumCash)}.`,
      ]);
    }
  }
  const supplemental = visualReportSections(i, P);
  const h = "radar-business-plan-" + i.id.slice(0, 8);
  if (R === "Excel") {
    const n = await f(
        () => import("./exceljs.js").then((a) => a.e),
        __vite__mapDeps([0, 1, 2]),
      ),
      s = new n.Workbook(),
      t = (a, l, k) => {
        const d = s.addWorksheet(a);
        ((d.columns = l.map((m) => ({ header: m, width: 45 }))),
          k.forEach((m) =>
            d.addRow(m.map((b) => (typeof b == "number" ? b : v(b)))),
          ),
          (d.getRow(1).font = { bold: !0, color: { argb: "FFFFFFFF" } }),
          (d.getRow(1).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FF2563EB" },
          }),
          d.eachRow((m) => (m.alignment = { wrapText: !0, vertical: "top" })));
      };
    t("Ringkasan", ["Parameter", "Isi"], c);
    for (const extra of supplemental)
      t(extra.title, ["Parameter", "Isi"], extra.rows);
    for (const [a, l] of g.entries())
      t(`Bagian ${p[a].number}`, ["Pertanyaan", "Isian"], l.rows);
    (t(
      "Asumsi keuangan",
      ["Asumsi", "Nilai"],
      w.map(([a, l]) => [l, i.finance[a] ?? "Belum diketahui"]),
    ),
      t(
        "Proyeksi 12 bulan",
        [
          "Bulan",
          "Unit",
          "Pendapatan",
          "Biaya",
          "Laba sederhana",
          "Kas masuk",
          "Kas akhir",
        ],
        r
          ? r.rows.map((a) => [
              a.month,
              a.units,
              a.revenue,
              a.cost,
              a.profit,
              a.received,
              a.cash,
            ])
          : [["Belum dapat dihitung", "", "", "", "", "", ""]],
      ),
      t(
        "Risiko",
        ["Risiko", "Dampak", "Peringatan", "Penanganan", "Penanggung jawab"],
        i.risks.map((a) => [
          a.risk,
          a.impact,
          a.warning,
          a.mitigation,
          a.owner,
        ]),
      ),
      t(
        "Bukti asal",
        ["Teks", "Sumber", "URL", "Konteks"],
        i.sourceProblem.evidence.map((a) => [
          a.quote,
          a.source,
          a.url,
          a.context,
        ]),
      ));
    const u = await s.xlsx.writeBuffer(),
      o = URL.createObjectURL(new Blob([u])),
      e = document.createElement("a");
    ((e.href = o),
      (e.download = h + ".xlsx"),
      e.click(),
      setTimeout(() => URL.revokeObjectURL(o), 1e3));
  } else {
    const { jsPDF: n } = await f(
        async () => {
          const { jsPDF: e } = await import("./jspdf.js").then((a) => a.j);
          return { jsPDF: e };
        },
        __vite__mapDeps([3, 1, 2]),
      ),
      { default: s } = await f(async () => {
        const { default: e } = await import("./autotable.js");
        return { default: e };
      }, []),
      t = new n();
    let u = 20;
    const o = (e, a, l) => {
      (u > 225 && (t.addPage(), (u = 20)),
        t.setFontSize(14),
        t.setTextColor("#172033"));
      const k = t.splitTextToSize(e, 180);
      (t.text(k, 14, u),
        (u += k.length * 6 + 4),
        s(t, {
          startY: u,
          head: [a],
          body: l,
          styles: { fontSize: 8, overflow: "linebreak", cellPadding: 3 },
          headStyles: { fillColor: "#2563eb" },
          columnStyles:
            a.length === 2
              ? { 0: { cellWidth: 48 }, 1: { cellWidth: 134 } }
              : Object.fromEntries(
                  a.map((d, m) => [m, { cellWidth: 182 / a.length }]),
                ),
          margin: { bottom: 18 },
          didDrawPage: () => {
            (t.setFontSize(8),
              t.text(
                "Draf business plan — periksa sumber dan asumsi",
                14,
                287,
              ));
          },
        }),
        (u = t.lastAutoTable.finalY + 14));
    };
    o("Radar Peluang — Business Plan", ["Parameter", "Isi"], c);
    for (const e of g) o(e.title, ["Pertanyaan", "Isian"], e.rows);
    for (const extra of supplemental)
      o(extra.title, ["Parameter", "Isi"], extra.rows);
    (o(
      "Asumsi keuangan",
      ["Asumsi", "Nilai"],
      w.map(([e, a]) => [a, i.finance[e] ?? "Belum diketahui"]),
    ),
      o(
        "Proyeksi 12 bulan — sederhana, bukan hasil aktual",
        ["Bulan", "Unit", "Pendapatan", "Biaya", "Laba", "Kas akhir"],
        r
          ? r.rows.map((e) => [
              e.month,
              e.units,
              e.revenue,
              e.cost,
              e.profit,
              e.cash,
            ])
          : [["Belum dapat dihitung", "", "", "", "", ""]],
      ),
      o(
        "Daftar risiko",
        ["Risiko / dampak", "Peringatan / penanganan / penanggung jawab"],
        i.risks.length
          ? i.risks.map((e) => [
              e.risk +
                `
` +
                e.impact,
              [e.warning, e.mitigation, e.owner].join(`
`),
            ])
          : [["Belum diisi", "Belum diisi"]],
      ),
      o(
        "Bukti asal — status mengikuti data riset",
        ["Teks dan konteks", "Sumber dan URL"],
        i.sourceProblem.evidence.map((e) => [
          e.quote +
            `
` +
            e.context,
          e.source +
            `
` +
            e.url,
        ]),
      ),
      t.save(h + ".pdf"));
  }
}
export { j as exportPlan };
