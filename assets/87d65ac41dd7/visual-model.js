/** Pure models shared by the on-screen visualisations and their exports. */
export const PALETTES = {
  purple: {
    label: "Ungu",
    primary: "#7862c8",
    secondary: "#4d9fbb",
    accent: "#da9d78",
    background: "#f2effa",
    text: "#292640",
  },
  blue: {
    label: "Biru",
    primary: "#3979b7",
    secondary: "#829cdd",
    accent: "#e0a169",
    background: "#eff5fb",
    text: "#21384d",
  },
  green: {
    label: "Hijau",
    primary: "#40866e",
    secondary: "#91a866",
    accent: "#c79266",
    background: "#f0f7f2",
    text: "#243c33",
  },
  orange: {
    label: "Oranye",
    primary: "#bc6b38",
    secondary: "#d99e61",
    accent: "#638d9e",
    background: "#fbf3ec",
    text: "#493223",
  },
  red: {
    label: "Merah",
    primary: "#b85268",
    secondary: "#ba87ac",
    accent: "#60999f",
    background: "#fbf0f3",
    text: "#4a2832",
  },
  black: {
    label: "Abu-abu",
    primary: "#526076",
    secondary: "#8b98ad",
    accent: "#b3926d",
    background: "#f2f4f7",
    text: "#202d40",
  },
};
export const VISUAL_NAMES = {
  vpc: "Value Proposition Canvas",
  value: "Value Proposition",
  profile: "Customer Profile",
  persona: "User Persona",
  finance: "Financial Dashboard",
};
export function visualTheme(plan, type) {
  const saved = plan.visualSettings?.[type] || {};
  const base = PALETTES[saved.palette] || PALETTES.purple;
  const theme = { ...base, ...saved };
  for (const field of [
    "primary",
    "secondary",
    "accent",
    "background",
    "text",
  ]) {
    if (!/^#[0-9a-f]{6}$/i.test(theme[field])) theme[field] = base[field];
  }
  theme.fontSize = Math.max(14, Math.min(24, Number(saved.fontSize) || 18));
  return theme;
}
export function allocationRows(rows, total) {
  const clean = (rows || []).map((r) => ({
    label: String(r.label || "Komponen"),
    amount: Number(r.amount) || 0,
  }));
  if (clean.some((r) => r.amount < 0 || !Number.isFinite(r.amount)))
    return { rows: [], valid: false };
  const sum = clean.reduce((s, r) => s + r.amount, 0);
  if (sum > total + 0.01)
    return {
      rows: total
        ? [{ label: "Total asumsi (rincian melebihi total)", amount: total }]
        : [],
      valid: false,
    };
  if (total - sum > 0.01)
    clean.push({
      label: clean.length ? "Belum dialokasikan" : "Belum dirinci",
      amount: total - sum,
    });
  return { rows: clean.filter((r) => r.amount > 0), valid: true };
}
export function investmentMetrics(cashflows, startup, annualDiscount) {
  if (
    !Number.isFinite(annualDiscount) ||
    annualDiscount < 0 ||
    annualDiscount > 100 ||
    !Number.isFinite(startup) ||
    startup < 0 ||
    cashflows.some((x) => !Number.isFinite(x))
  )
    return null;
  const monthlyDiscount = (1 + annualDiscount / 100) ** (1 / 12) - 1;
  const npv =
    -startup +
    cashflows.reduce(
      (s, cf, i) => s + cf / (1 + monthlyDiscount) ** (i + 1),
      0,
    );
  let cumulative = -startup,
    payback = null;
  if (startup > 0)
    for (let i = 0; i < cashflows.length; i++) {
      const before = cumulative;
      cumulative += cashflows[i];
      if (payback === null && before < 0 && cumulative >= 0 && cashflows[i] > 0)
        payback = i + -before / cashflows[i];
    }
  const values = [-startup, ...cashflows].filter((x) => x !== 0);
  const changes = values
    .slice(1)
    .filter((v, i) => Math.sign(v) !== Math.sign(values[i])).length;
  let irr = null;
  if (startup > 0 && changes === 1 && values.at(-1) > 0) {
    const f = (r) =>
      -startup + cashflows.reduce((s, cf, i) => s + cf / (1 + r) ** (i + 1), 0);
    let lo = -0.9999,
      hi = 10;
    if (f(lo) > 0 && f(hi) < 0) {
      for (let i = 0; i < 120; i++) {
        const mid = (lo + hi) / 2;
        if (f(mid) > 0) lo = mid;
        else hi = mid;
      }
      const annual = ((1 + (lo + hi) / 2) ** 12 - 1) * 100;
      if (Number.isFinite(annual)) irr = annual;
    }
  }
  return {
    npv,
    irr,
    payback,
    irrReason:
      startup === 0
        ? "Investasi awal nol"
        : changes !== 1
          ? "Arus kas tidak konvensional"
          : "Tidak ada akar IRR dalam rentang perhitungan",
  };
}
export function dashboardModel(finance, details, calculateFinance) {
  const base = calculateFinance(finance);
  if (!base) return null;
  const rows = base.rows.map((r) => ({
    ...r,
    hpp: r.units * finance.variable,
    opex: finance.fixed,
    tax: finance.tax,
    operating: r.received - r.cost,
  }));
  const total = (field) => rows.reduce((sum, r) => sum + r[field], 0);
  const discount = details?.discount === undefined ? 10 : details.discount;
  return {
    ...base,
    rows,
    revenue: total("revenue"),
    hpp: total("hpp"),
    opex: total("opex"),
    tax: total("tax"),
    gross: total("revenue") - total("hpp"),
    operatingProfit: total("revenue") - total("hpp") - total("opex"),
    net: total("profit"),
    cashEnd: rows.at(-1).cash,
    opexAllocation: allocationRows(details?.opex, finance.fixed),
    capexAllocation: allocationRows(details?.capex, finance.startup),
    discount,
    metrics:
      discount === null
        ? null
        : investmentMetrics(
            rows.map((r) => r.operating),
            finance.startup,
            Number(discount),
          ),
  };
}

/** Text counterparts keep the main Excel/PDF business-plan report complete. */
export function visualReportSections(plan, calculateFinance) {
  const sections = [];
  if (plan.persona) {
    const p = plan.persona;
    const labels = {
      name: "Nama",
      role: "Peran / segmen",
      age: "Usia",
      location: "Lokasi",
      education: "Pendidikan",
      occupation: "Pekerjaan",
      phone: "Telepon",
      email: "Email",
      bio: "Biodata",
      goals: "Tujuan",
      frustrations: "Hambatan",
      brands: "Merek pilihan",
    };
    sections.push({
      title: "User Persona",
      rows: [
        ...Object.entries(labels).map(([key, label]) => [
          label,
          p[key] || "Belum diisi",
        ]),
        ...(p.traits || []).map((r) => [
          `Personality: ${r.label}`,
          r.value === null ? "Belum dinilai" : `${r.value}%`,
        ]),
        ...(p.skills || []).map((r) => [
          `Skill: ${r.label}`,
          r.value === null ? "Belum dinilai" : `${r.value}/5`,
        ]),
        [
          "Foto",
          p.photo
            ? "Tersedia pada unduhan visual User Persona PNG/PDF."
            : "Belum diunggah",
        ],
      ],
    });
  }
  const model = dashboardModel(
    plan.finance,
    plan.financialDetails,
    calculateFinance,
  );
  if (model)
    sections.push({
      title: "Dashboard keuangan",
      rows: [
        ["Horizon", "12 bulan; proyeksi, bukan hasil aktual"],
        ["Revenue", model.revenue],
        ["HPP", model.hpp],
        ["Beban usaha", model.opex],
        ["Laba bruto", model.gross],
        ["Laba usaha", model.operatingProfit],
        ["Pajak asumsi", model.tax],
        ["Laba bersih sederhana", model.net],
        ["Kas akhir bulan 12", model.cashEnd],
        ["Diskonto tahunan (%)", model.discount ?? "Belum diisi"],
        ["NPV", model.metrics?.npv ?? "Belum dihitung"],
        ["IRR tahunan (%)", model.metrics?.irr ?? "Tidak tersedia"],
        [
          "Payback (bulan)",
          model.metrics?.payback ?? "Belum kembali / tidak tersedia",
        ],
        [
          "Dasar indikator",
          "Investasi awal = pengeluaran awal; arus operasi = kas diterima dikurangi biaya. Tanpa nilai terminal dan piutang setelah bulan 12.",
        ],
        ...(plan.financialDetails?.opex || []).map((r) => [
          `OPEX bulanan: ${r.label}`,
          r.amount ?? "Belum diisi",
        ]),
        ...(plan.financialDetails?.capex || []).map((r) => [
          `CAPEX awal: ${r.label}`,
          r.amount ?? "Belum diisi",
        ]),
        [
          "Rincian OPEX",
          model.opexAllocation.valid
            ? "Sisa belum dialokasikan tidak menambah biaya."
            : "Rincian melebihi total; dashboard memakai total asumsi.",
        ],
        [
          "Rincian CAPEX",
          model.capexAllocation.valid
            ? "Sisa belum dialokasikan tidak menambah investasi."
            : "Rincian melebihi total; dashboard memakai total asumsi.",
        ],
      ],
    });
  return sections;
}
