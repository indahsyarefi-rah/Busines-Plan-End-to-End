import { visualTheme, VISUAL_NAMES, dashboardModel } from "./visual-model.js";
export const xml = (value) =>
  String(value ?? "")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "")
    .replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&apos;",
        })[c],
    );
const money = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
const number = (n) =>
  new Intl.NumberFormat("id-ID", { maximumFractionDigits: 1 }).format(n);
const compact = (n) =>
  new Intl.NumberFormat("id-ID", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n);
let context;
function measure(s, size) {
  if (typeof document !== "undefined") {
    context ||= document.createElement("canvas").getContext("2d");
    if (context) {
      context.font = `${size}px Arial`;
      return context.measureText(s).width;
    }
  }
  return [...s].length * size * 0.56;
}
export function wrapText(value, width, size = 18) {
  const lines = [];
  for (const paragraph of String(value || "Belum diisi").split("\n")) {
    let line = "";
    for (const word of paragraph.split(/\s+/).filter(Boolean)) {
      if (measure(word, size) > width) {
        if (line) {
          lines.push(line);
          line = "";
        }
        for (const letter of word) {
          if (line && measure(line + letter, size) > width) {
            lines.push(line);
            line = "";
          }
          line += letter;
        }
      } else if (line && measure(line + " " + word, size) > width) {
        lines.push(line);
        line = word;
      } else line += (line ? " " : "") + word;
    }
    lines.push(line);
  }
  return lines;
}
const rect = (x, y, w, h, fill, stroke = "none", radius = 20) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="${stroke}"/>`;
const text = (x, y, value, size, color, weight = 400, anchor = "start") =>
  `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${xml(value)}</text>`;
const fit = (x, y, value, size, width, color, weight = 400, anchor = "start") =>
  text(
    x,
    y,
    value,
    Math.min(
      size,
      (size * width) / Math.max(width, measure(String(value), size)),
    ),
    color,
    weight,
    anchor,
  );
const line = (x1, y1, x2, y2, color, width = 2) =>
  `<path d="M ${x1} ${y1} L ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}"/>`;
function header(plan, type, t) {
  return (
    text(48, 43, "VENTU / BUSINESS PLAN", 13, t.primary, 700) +
    text(48, 92, VISUAL_NAMES[type], 34, t.text, 700) +
    fit(
      48,
      125,
      plan.canvasIdentity?.businessName || plan.name,
      18,
      1480,
      t.text,
    )
  );
}
function shell(plan, type, t, body, index, count, height = 1000) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="${height}" viewBox="0 0 1600 ${height}" font-family="Arial, sans-serif">${rect(0, 0, 1600, height, t.background, "none", 0)}${header(plan, type, t)}${body}${text(48, height - 35, "Draf dari isian pengguna · Periksa asumsi dan bukti sebelum mengambil keputusan.", 14, t.text)}${text(1552, height - 35, `Halaman ${index + 1}/${count}`, 14, t.text, 400, "end")}</svg>`;
}
function paginate(regions, t) {
  const items = regions.map((r) => ({
    ...r,
    size: r.size || t.fontSize,
    lines: wrapText(r.value, r.w, r.size || t.fontSize),
    limit: Math.max(
      1,
      Math.floor((r.h - (r.title ? 42 : 0)) / ((r.size || t.fontSize) * 1.4)),
    ),
  }));
  const count = Math.max(
    1,
    ...items.map((r) => Math.ceil(r.lines.length / r.limit)),
  );
  return Array.from({ length: count }, (_, page) =>
    items
      .map((r) => {
        const label = r.title
          ? fit(r.x, r.y + 20, r.title, 19, r.w, t.primary, 700)
          : "";
        const rows = r.lines.slice(page * r.limit, (page + 1) * r.limit);
        return (
          label +
          rows
            .map((s, i) =>
              text(
                r.x,
                r.y + (r.title ? 52 : Math.max(23, r.size)) + i * r.size * 1.4,
                s,
                r.size,
                t.text,
                r.bold ? 700 : 400,
              ),
            )
            .join("")
        );
      })
      .join(""),
  );
}
function valueMap(plan, type, t) {
  const full = type === "vpc",
    values = plan.sections.value.values,
    regions = [];
  let body = rect(48, 154, 1504, 756, "#ffffff");
  if (type !== "profile") {
    const dx = full ? 0 : 362,
      x = 78 + dx,
      y = 214;
    body += text(
      x + 310,
      195,
      "VALUE PROPOSITION",
      21,
      t.primary,
      700,
      "middle",
    );
    body +=
      rect(x, y, 620, 620, t.primary + "20", t.primary, 0) +
      line(x, y, x + 310, y + 310, t.primary) +
      line(x, y + 620, x + 310, y + 310, t.primary) +
      line(x + 310, y + 310, x + 620, y + 310, t.primary);
    regions.push(
      {
        x: x + 20,
        y: y + 236,
        w: 226,
        h: 165,
        title: "Products & services",
        value: values[3],
      },
      {
        x: x + 286,
        y: y + 42,
        w: 305,
        h: 230,
        title: "Gain creators",
        value: values[5],
      },
      {
        x: x + 286,
        y: y + 356,
        w: 305,
        h: 230,
        title: "Pain relievers",
        value: values[4],
      },
    );
  }
  if (type !== "value") {
    const cx = full ? 1150 : 800,
      cy = 524,
      r = 310,
      col = full ? t.secondary : t.primary;
    body += text(cx, 195, "CUSTOMER PROFILE", 21, col, 700, "middle");
    body +=
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${col}20" stroke="${col}" stroke-width="2"/>` +
      line(cx - r, cy, cx, cy, col) +
      line(cx, cy, cx + 219, cy - 219, col) +
      line(cx, cy, cx + 219, cy + 219, col);
    regions.push(
      {
        x: cx - 185,
        y: cy - 210,
        w: 230,
        h: 167,
        title: "Gains",
        value: values[2],
      },
      {
        x: cx - 185,
        y: cy + 66,
        w: 230,
        h: 167,
        title: "Pains",
        value: values[1],
      },
      {
        x: cx + 69,
        y: cy - 90,
        w: 180,
        h: 180,
        title: "Customer jobs",
        value: values[0],
      },
    );
  }
  if (full)
    body +=
      line(718, 524, 810, 524, t.accent, 3) +
      `<path d="M 729 515 L 718 524 L 729 533 M 799 515 L 810 524 L 799 533" fill="none" stroke="${t.accent}" stroke-width="3"/>`;
  body += text(
    800,
    883,
    "Produk dan manfaat dipetakan terhadap kebutuhan, kesulitan, dan harapan pelanggan.",
    16,
    t.text,
    400,
    "middle",
  );
  const pages = paginate(regions, t);
  return {
    width: 1600,
    height: 1000,
    pages: pages.map((content, i) =>
      shell(plan, type, t, body + content, i, pages.length),
    ),
  };
}
function persona(plan, t) {
  const p = plan.persona || {},
    col = t.primary;
  let body = rect(48, 154, 1504, 876, "#ffffff");
  const cards = [
    [68, 174, 346, 836],
    [436, 174, 530, 226],
    [986, 174, 546, 226],
    [436, 420, 1096, 150],
    [436, 590, 530, 210],
    [436, 820, 530, 190],
    [986, 590, 546, 420],
  ];
  body += cards
    .map(([x, y, w, h]) => rect(x, y, w, h, "#ffffff", col + "70", 18))
    .join("");
  body += rect(98, 200, 286, 230, t.background, "none", 16);
  if (/^data:image\/(jpeg|png|webp);base64,/.test(p.photo || ""))
    body += `<defs><clipPath id="portrait"><rect x="98" y="200" width="286" height="230" rx="16"/></clipPath></defs><image href="${xml(p.photo)}" x="98" y="200" width="286" height="230" preserveAspectRatio="xMidYMid slice" clip-path="url(#portrait)"/>`;
  else
    body +=
      `<circle cx="241" cy="274" r="35" fill="${col}70"/><path d="M 170 384 C 170 300 312 300 312 384 Z" fill="${col}70"/>` +
      text(241, 414, "Unggah foto persona", 14, t.text, 400, "middle");
  const metadata = [
    ["Usia", p.age],
    ["Lokasi", p.location],
    ["Pendidikan", p.education],
    ["Pekerjaan", p.occupation],
    ["Telepon", p.phone],
    ["Email", p.email],
  ]
    .map(([k, v]) => `${k}: ${v || "Belum diisi"}`)
    .join("\n");
  const pages = paginate(
    [
      {
        x: 90,
        y: 449,
        w: 302,
        h: 80,
        size: t.fontSize * 1.5,
        bold: true,
        value: p.name || "Nama persona",
      },
      {
        x: 90,
        y: 536,
        w: 302,
        h: 85,
        value: p.role || "Peran / segmen pelanggan",
      },
      {
        x: 90,
        y: 648,
        w: 302,
        h: 335,
        title: "Profil singkat",
        value: metadata,
      },
      {
        x: 460,
        y: 195,
        w: 482,
        h: 185,
        title: "Goals / tujuan",
        value: p.goals,
      },
      { x: 1010, y: 195, w: 498, h: 185, title: "Biodata", value: p.bio },
      {
        x: 460,
        y: 840,
        w: 482,
        h: 152,
        title: "Favorite brands",
        value: p.brands,
      },
      {
        x: 1010,
        y: 612,
        w: 498,
        h: 375,
        title: "Frustrations / hambatan",
        value: p.frustrations,
      },
    ],
    t,
  );
  body += text(460, 451, "Personality", 19, col, 700);
  const traits = (p.traits || []).slice(0, 4);
  if (!traits.length)
    body += text(
      460,
      488,
      "Tambahkan karakter dan persentasenya melalui formulir.",
      17,
      t.text,
    );
  traits.forEach((r, i) => {
    const y = 480 + i * 22,
      v = r.value === null ? null : Number(r.value);
    body +=
      fit(460, y, r.label || "Karakter", 15, 360, t.text) +
      rect(860, y - 12, 530, 12, t.background, "none", 6) +
      (v === null
        ? ""
        : rect(
            860,
            y - 12,
            (530 * Math.max(0, Math.min(100, v))) / 100,
            12,
            col,
            "none",
            6,
          )) +
      text(1498, y, v === null ? "—" : `${v}%`, 15, t.text, 400, "end");
  });
  body += text(460, 622, "Skills", 19, col, 700);
  const skills = (p.skills || []).slice(0, 5);
  if (!skills.length)
    body += text(
      460,
      659,
      "Tambahkan keterampilan dan penilaian 0–5.",
      17,
      t.text,
    );
  skills.forEach((r, i) => {
    const y = 657 + i * 27,
      v = r.value === null ? null : Number(r.value);
    body +=
      fit(460, y, r.label || "Keterampilan", 16, 290, t.text) +
      text(
        784,
        y,
        v === null
          ? "Belum dinilai"
          : "★".repeat(Math.max(0, Math.min(5, v))) +
              "☆".repeat(5 - Math.max(0, Math.min(5, v))),
        18,
        col,
      );
  });
  return {
    width: 1600,
    height: 1100,
    pages: pages.map((content, i) =>
      shell(plan, "persona", t, body + content, i, pages.length, 1100),
    ),
  };
}
function donut(x, y, w, h, title, allocation, total, t) {
  const cx = x + 116,
    cy = y + 164,
    r = 75,
    len = 2 * Math.PI * r;
  let out =
      rect(x, y, w, h, "#ffffff") +
      text(x + 22, y + 34, title, 20, t.text, 700),
    offset = 0;
  out += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${t.background}" stroke-width="30"/>`;
  const colors = [
    t.primary,
    t.secondary,
    t.accent,
    t.primary + "a0",
    t.secondary + "a0",
    t.accent + "a0",
    t.primary + "60",
  ];
  allocation.rows.forEach((row, i) => {
    const dash = total > 0 ? (row.amount / total) * len : 0;
    out += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${colors[i % colors.length]}" stroke-width="30" stroke-dasharray="${dash} ${len - dash}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})"/>`;
    offset += dash;
    out +=
      rect(
        x + 229,
        y + 67 + i * 29,
        10,
        10,
        colors[i % colors.length],
        "none",
        2,
      ) +
      fit(
        x + 246,
        y + 77 + i * 29,
        `${row.label} (${number(total ? (row.amount / total) * 100 : 0)}%)`,
        14,
        w - 262,
        t.text,
      );
  });
  out +=
    text(cx, cy + 6, total ? "100%" : "0", 24, t.text, 700, "middle") +
    fit(x + 22, y + h - 25, money(total), 23, w - 44, t.primary, 700);
  if (!allocation.valid)
    out += text(
      x + 22,
      y + h - 58,
      "Rincian melebihi total; grafik memakai total asumsi.",
      13,
      "#b43b53",
    );
  return out;
}
function cashChart(x, y, w, h, rows, t) {
  let out =
    rect(x, y, w, h, "#ffffff") +
    text(x + 24, y + 35, "Cashflow projection · 12 bulan", 21, t.text, 700);
  const keys = ["received", "cost", "operating"],
    colors = [t.primary, t.secondary, t.accent];
  keys.forEach((key, i) => {
    out +=
      rect(x + 26 + i * 186, y + 55, 10, 10, colors[i], "none", 2) +
      text(
        x + 42 + i * 186,
        y + 65,
        ["Kas masuk", "Kas keluar", "Arus kas operasi"][i],
        13,
        t.text,
      );
  });
  const left = x + 83,
    top = y + 96,
    pw = w - 106,
    ph = h - 146;
  const vals = rows.flatMap((r) => keys.map((k) => r[k]));
  let lo = Math.min(0, ...vals),
    hi = Math.max(0, ...vals);
  if (hi === lo) hi = lo + 1;
  const sy = (v) => top + ((hi - v) / (hi - lo)) * ph,
    zero = sy(0),
    step = pw / 12;
  for (let i = 0; i <= 4; i++) {
    const v = lo + ((hi - lo) * i) / 4,
      py = sy(v);
    out +=
      line(left, py, left + pw, py, "#e7e9f0", 1) +
      text(left - 10, py + 5, compact(v), 12, t.text, 400, "end");
  }
  rows.forEach((r, i) => {
    keys.forEach((key, j) => {
      const v = r[key],
        py = sy(v);
      out += rect(
        left + i * step + j * 9 + 4,
        Math.min(zero, py),
        7,
        Math.max(0.5, Math.abs(py - zero)),
        colors[j],
        "none",
        1,
      );
    });
    out += text(
      left + i * step + 17,
      top + ph + 22,
      String(r.month),
      12,
      t.text,
      400,
      "middle",
    );
  });
  return (
    out +
    text(
      x + 22,
      y + h - 13,
      "Sumbu nilai: rupiah · Bulan 1–12 · Proyeksi, bukan hasil aktual.",
      12,
      t.text,
    )
  );
}
function finance(plan, t, calculateFinance) {
  const m = dashboardModel(
    plan.finance,
    plan.financialDetails,
    calculateFinance,
  );
  if (!m)
    return {
      width: 1600,
      height: 1100,
      pages: [
        shell(
          plan,
          "finance",
          t,
          rect(48, 160, 1504, 850, "#ffffff") +
            text(
              90,
              250,
              "Lengkapi seluruh asumsi angka untuk menampilkan dashboard.",
              26,
              t.text,
            ) +
            text(
              90,
              295,
              "Angka kosong tidak dianggap nol. Periksa kapasitas, pertumbuhan, dan jeda pembayaran.",
              18,
              t.text,
            ),
          0,
          1,
          1100,
        ),
      ],
    };
  let body = "";
  [
    ["Revenue · 12 bulan", money(m.revenue)],
    ["Laba bersih sederhana", money(m.net)],
    ["Kas akhir bulan 12", money(m.cashEnd)],
    [
      "Titik impas / bulan",
      m.breakEven === null ? "Tidak tercapai" : `${number(m.breakEven)} unit`,
    ],
  ].forEach(([label, value], i) => {
    const x = 48 + i * 381;
    body +=
      rect(x, 155, 361, 98, "#ffffff") +
      text(x + 20, 184, label, 16, t.text) +
      fit(x + 20, 224, value, 27, 321, t.primary, 700);
  });
  body +=
    donut(
      48,
      275,
      470,
      320,
      "OPEX · biaya tetap bulanan",
      m.opexAllocation,
      plan.finance.fixed,
      t,
    ) +
    donut(
      48,
      615,
      470,
      320,
      "CAPEX · pengeluaran awal",
      m.capexAllocation,
      plan.finance.startup,
      t,
    );
  body +=
    cashChart(538, 275, 620, 390, m.rows, t) +
    rect(538, 685, 620, 250, "#ffffff") +
    text(562, 722, "Kelayakan investasi · horizon 12 bulan", 20, t.text, 700);
  const metrics = m.metrics;
  [
    ["NPV", metrics ? money(metrics.npv) : "Belum dihitung"],
    [
      "IRR tahunan",
      metrics?.irr === null || !metrics
        ? "Tidak tersedia"
        : `${number(metrics.irr)}%`,
    ],
    [
      "Payback period",
      !metrics
        ? "Belum dihitung"
        : metrics.payback === null
          ? plan.finance.startup === 0
            ? "Investasi awal nol"
            : "> 12 bulan"
          : `${number(metrics.payback)} bulan`,
    ],
  ].forEach(([label, value], i) => {
    const x = 560 + i * 195;
    body +=
      rect(x, 746, 180, 93, t.background) +
      text(x + 12, 774, label, 15, t.text, 700) +
      fit(x + 12, 811, value, 20, 156, t.primary, 700);
  });
  body +=
    text(
      562,
      865,
      `Diskonto tahunan: ${m.discount === null ? "belum diisi" : number(m.discount) + "%"} · investasi awal: pengeluaran awal`,
      14,
      t.text,
    ) +
    text(
      562,
      890,
      "NPV/IRR memakai arus kas operasi; modal pendanaan tidak dihitung sebagai laba.",
      13,
      t.text,
    ) +
    text(
      562,
      912,
      metrics?.irr === null
        ? `IRR: ${metrics.irrReason}.`
        : "IRR disetahunkan dari tingkat bulanan; bukan jaminan hasil.",
      13,
      t.text,
    );
  body +=
    rect(1178, 275, 374, 660, "#ffffff") +
    text(1200, 312, "Alur laba · 12 bulan", 21, t.text, 700);
  const flow = [
    ["Revenue", m.revenue, `− HPP: ${money(m.hpp)}`],
    ["Laba bruto", m.gross, `− Beban usaha: ${money(m.opex)}`],
    [
      "Laba usaha",
      m.operatingProfit,
      "Pendapatan / beban lain belum dimodelkan",
    ],
    [
      "Laba sebelum pajak",
      m.operatingProfit,
      `− Pajak asumsi: ${money(m.tax)}`,
    ],
    ["Laba bersih", m.net, ""],
  ];
  flow.forEach(([label, value, minus], i) => {
    const y = 336 + i * 113;
    body +=
      rect(1198, y, 334, 70, t.primary + (i === 4 ? "30" : "14"), "none", 10) +
      text(1214, y + 25, label, 16, t.text, 700) +
      fit(1214, y + 55, money(value), 23, 300, t.primary, 700);
    if (minus)
      body +=
        line(1365, y + 73, 1365, y + 87, t.secondary) +
        text(1365, y + 101, minus, 12, t.text, 400, "middle");
  });
  body +=
    text(
      48,
      973,
      "Model sederhana: HPP = biaya variabel; OPEX = biaya tetap; pajak = asumsi bulanan.",
      16,
      t.text,
    ) +
    text(
      48,
      1000,
      "Belum mencakup depresiasi, bunga/pinjaman, persediaan, nilai terminal, dan piutang setelah bulan 12.",
      15,
      t.text,
    );
  return {
    width: 1600,
    height: 1100,
    pages: [shell(plan, "finance", t, body, 0, 1, 1100)],
  };
}
export function renderVisual(plan, type, calculateFinance) {
  const theme = visualTheme(plan, type);
  if (type === "persona") return persona(plan, theme);
  if (type === "finance") return finance(plan, theme, calculateFinance);
  return valueMap(plan, type, theme);
}
