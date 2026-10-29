import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
import {
  investmentMetrics,
  allocationRows,
} from "../src/runtime/visual-model.js";
import { renderVisual, wrapText } from "../src/runtime/visual-render.js";

async function createPlan(page) {
  await page.goto("./");
  await page.getByRole("button", { name: "Cari database lokal" }).click();
  await page.getByLabel("Topik atau industri").fill("kemasan plastik");
  await page
    .getByLabel("Periode", { exact: true })
    .selectOption({ label: "Semua periode" });
  await page.getByRole("button", { name: "Mulai riset", exact: true }).click();
  await page.locator(".problem-row").first().click();
  await page
    .getByRole("button", { name: "Buat Business Plan", exact: true })
    .click();
  const toast = page.getByRole("button", {
    name: "Tutup notifikasi",
    exact: true,
  });
  if (await toast.isVisible()) await toast.click();
}
async function download(page, name, prefix) {
  const event = page.waitForEvent("download");
  await page.getByRole("button", { name, exact: true }).click();
  const file = await event;
  expect(await file.failure()).toBeNull();
  const bytes = await readFile(await file.path());
  expect(bytes.subarray(0, prefix.length)).toEqual(Buffer.from(prefix));
  expect(bytes.length).toBeGreaterThan(1000);
  return bytes;
}
async function svg(page) {
  return page.locator(".visual-preview img").evaluate(async (img) => {
    await img.decode();
    const text = decodeURIComponent(img.src.split(",").slice(1).join(","));
    const doc = new DOMParser().parseFromString(text, "image/svg+xml");
    if (doc.querySelector("parsererror")) throw Error("Invalid SVG");
    return text;
  });
}
async function returnToPlan(page) {
  await page.reload();
  await page
    .getByRole("button", { name: "Business Plan", exact: true })
    .click();
  await page.locator(".saved-title").click();
}

test("investment indicators handle known cashflows and undefined IRR honestly", () => {
  const m = investmentMetrics([110], 100, 0);
  expect(m.npv).toBeCloseTo(10);
  expect(m.payback).toBeCloseTo(100 / 110);
  expect(m.irr).toBeCloseTo((1.1 ** 12 - 1) * 100);
  expect(investmentMetrics([10], 0, 10).irr).toBeNull();
  expect(investmentMetrics([120, -20, 40], 100, 10).irr).toBeNull();
  expect(investmentMetrics([5, 5], 100, 10).payback).toBeNull();
  expect(investmentMetrics([110], 100, 1000)).toBeNull();
  expect(allocationRows([{ label: "A", amount: 40 }], 100).rows).toEqual([
    { label: "A", amount: 40 },
    { label: "Belum dialokasikan", amount: 60 },
  ]);
  expect(allocationRows([{ label: "A", amount: 110 }], 100).valid).toBe(false);
});

test("long VPC/persona content paginates without losing text or injecting markup", () => {
  const content =
    Array.from({ length: 120 }, (_, i) => `baris-${i}`).join("\n") +
    '\n<script>alert("x")</script>';
  const plan = {
    name: "Test <svg>",
    sections: {
      value: { values: [content, content, content, content, content, content] },
    },
    persona: { goals: content },
    visualSettings: {},
  };
  for (const type of ["vpc", "value", "profile", "persona"]) {
    const visual = renderVisual(plan, type);
    expect(visual.pages.length).toBeGreaterThan(1);
    const all = visual.pages.join("");
    expect(all).toContain("baris-119");
    expect(all).toContain("&lt;script&gt;");
    expect(all).not.toContain("<script>");
  }
  expect(wrapText("W".repeat(120), 100).join("")).toBe("W".repeat(120));
});

test("VPC and each side export PNG/PDF with independent persistent colors", async ({
  page,
}) => {
  test.setTimeout(120000);
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await createPlan(page);
  await page
    .getByRole("button", { name: /5\. Value Proposition Canvas/ })
    .click();
  const values = [
    [
      "Customer jobs: kebutuhan atau pekerjaan pelanggan",
      "Menjaga makanan tetap aman",
    ],
    ["Pains: kesulitan pelanggan dan bukti", "Kemasan bocor & sulit dibuka"],
    ["Gains: hasil yang diharapkan", "Pangan segar lebih lama"],
    ["Products and services", "Kemasan pangan <aman>"],
    ["Pain relievers: hubungan penawaran dengan kesulitan", "Segel anti bocor"],
    [
      "Gain creators: manfaat dan asumsi yang perlu diuji",
      "Kemasan dapat digunakan ulang",
    ],
  ];
  for (const [label, value] of values)
    await page.getByLabel(label, { exact: true }).fill(value);
  const vpc = await svg(page);
  expect(vpc).toContain("Kemasan pangan &lt;aman&gt;");
  expect(vpc.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ")).toContain(
    "Kemasan bocor &amp; sulit dibuka",
  );
  await page
    .locator(".visual-preview")
    .screenshot({ path: "test-results/vpc-preview.png" });
  for (const [button, title, color] of [
    ["VPC lengkap", "Value Proposition Canvas", "#445599"],
    ["Value Proposition", "Value Proposition", "#228855"],
    ["Customer Profile", "Customer Profile", "#bb5577"],
  ]) {
    await page.getByRole("button", { name: button, exact: true }).click();
    if (!(await page.locator(".visual-appearance").evaluate((e) => e.open)))
      await page.locator(".visual-appearance summary").click();
    await page.getByLabel(`Warna utama ${title}`, { exact: true }).fill(color);
    expect(await svg(page)).toContain(color);
    await download(page, `Unduh ${title} PNG`, [0x89, 0x50, 0x4e, 0x47]);
    await download(page, `Unduh ${title} PDF`, [0x25, 0x50, 0x44, 0x46]);
  }
  await returnToPlan(page);
  await page
    .getByRole("button", { name: /5\. Value Proposition Canvas/ })
    .click();
  expect(await svg(page)).toContain("#445599");
  await page
    .getByRole("button", { name: "Customer Profile", exact: true })
    .click();
  expect(await svg(page)).toContain("#bb5577");
  await expect(page.getByLabel(values[0][0], { exact: true })).toHaveValue(
    values[0][1],
  );
  expect(errors).toEqual([]);
});

test("persona photo, traits, skills and theme persist and are embedded in both exports", async ({
  page,
}) => {
  await createPlan(page);
  await page.getByRole("button", { name: /4\. Target Market/ }).click();
  await page.getByLabel("Nama persona", { exact: true }).fill("Nadia Putri");
  await page
    .getByLabel("Peran / segmen persona", { exact: true })
    .fill("Pemilik usaha makanan");
  await page
    .getByLabel("Biodata persona", { exact: true })
    .fill("Mengelola usaha makanan rumahan.");
  await page
    .getByLabel("Goals / tujuan persona", { exact: true })
    .fill("Memastikan pelanggan menerima makanan yang segar.");
  await page
    .getByRole("button", { name: "Tambah Personality", exact: true })
    .click();
  await page.getByLabel("Personality 1", { exact: true }).fill("Teliti");
  await page.getByLabel("Persentase 1", { exact: true }).fill("93");
  await page
    .getByRole("button", { name: "Tambah Skills", exact: true })
    .click();
  await page.getByLabel("Skills 1", { exact: true }).fill("Riset konsumen");
  await page.getByLabel("Nilai 0–5 1", { exact: true }).fill("4");
  await page.getByLabel("Foto persona", { exact: true }).setInputFiles({
    name: "not-photo.svg",
    mimeType: "image/svg+xml",
    buffer: Buffer.from("<svg/>"),
  });
  await expect(page.getByRole("alert")).toContainText(
    "Gunakan foto JPG, PNG, atau WebP.",
  );
  const png = await page.evaluate(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 100;
    const x = c.getContext("2d");
    x.fillStyle = "#efad84";
    x.fillRect(0, 0, 100, 100);
    return c.toDataURL("image/png").split(",")[1];
  });
  await page.getByLabel("Foto persona", { exact: true }).setInputFiles({
    name: "persona.png",
    mimeType: "image/png",
    buffer: Buffer.from(png, "base64"),
  });
  await expect(
    page.getByRole("button", { name: "Hapus foto persona", exact: true }),
  ).toBeVisible();
  if (!(await page.locator(".visual-appearance").evaluate((e) => e.open)))
    await page.locator(".visual-appearance summary").click();
  await page
    .getByLabel("Warna utama User Persona", { exact: true })
    .fill("#347d67");
  const content = await svg(page);
  expect(content).toContain("data:image/jpeg;base64,");
  expect(content).toContain("Nadia Putri");
  expect(content).toContain("93%");
  expect(content).toContain("#347d67");
  await page
    .locator(".visual-preview")
    .screenshot({ path: "test-results/persona-preview.png" });
  await download(page, "Unduh User Persona PNG", [0x89, 0x50, 0x4e, 0x47]);
  await download(page, "Unduh User Persona PDF", [0x25, 0x50, 0x44, 0x46]);
  await page.getByLabel("Format laporan business plan").selectOption("Excel");
  const workbook = await download(page, "Ekspor business plan", [0x50, 0x4b]);
  const rows = await sheetRows(page, workbook, "User Persona");
  expect(rows.flat()).toContain("Nadia Putri");
  await page.getByLabel("Format laporan business plan").selectOption("PDF");
  await download(page, "Ekspor business plan", [0x25, 0x50, 0x44, 0x46]);
  await returnToPlan(page);
  await page.getByRole("button", { name: /4\. Target Market/ }).click();
  await expect(page.getByLabel("Nama persona", { exact: true })).toHaveValue(
    "Nadia Putri",
  );
  expect(await svg(page)).toContain("data:image/jpeg;base64,");
  await page
    .getByRole("button", { name: "Hapus foto persona", exact: true })
    .click();
  expect(await svg(page)).not.toContain("data:image/jpeg;base64,");
});

test("financial dashboard matches the existing model and keeps chart details separate from costs", async ({
  page,
}) => {
  await createPlan(page);
  await page.getByRole("button", { name: /13\. Financial Projection/ }).click();
  expect(await svg(page)).toContain("Lengkapi seluruh asumsi");
  const fields = [
    ["Pendapatan per unit / komisi per transaksi (Rp)", 10000],
    ["Biaya variabel per unit (Rp)", 4000],
    ["Biaya tetap bulanan (Rp)", 1000000],
    ["Volume bulan pertama (unit)", 500],
    ["Kapasitas maksimum bulanan (unit)", 500],
    ["Pertumbuhan volume bulanan (%)", 0],
    ["Kas/modal tersedia awal (Rp)", 10000000],
    ["Pengeluaran awal investasi (Rp)", 2000000],
    ["Pajak/biaya regulasi bulanan — asumsi (Rp)", 100000],
    ["Jeda penerimaan uang (bulan: 0–3)", 0],
  ];
  for (const [label, value] of fields)
    await page.getByLabel(label, { exact: true }).fill(String(value));
  if (!(await page.locator(".visual-appearance").evaluate((e) => e.open)))
    await page.locator(".visual-appearance summary").click();
  await page
    .getByLabel("Warna utama Financial Dashboard", { exact: true })
    .fill("#447799");
  await page.getByText("Rincian dashboard keuangan", { exact: true }).click();
  await page
    .getByRole("button", { name: "Tambah komponen OPEX", exact: true })
    .click();
  await page.getByLabel("Kategori OPEX 1", { exact: true }).fill("Operasional");
  await page.getByLabel("Nilai OPEX 1 (Rp)", { exact: true }).fill("600000");
  await page
    .getByRole("button", { name: "Tambah komponen CAPEX", exact: true })
    .click();
  await page.getByLabel("Kategori CAPEX 1", { exact: true }).fill("Peralatan");
  await page.getByLabel("Nilai CAPEX 1 (Rp)", { exact: true }).fill("2000000");
  const stored = await page.evaluate(
    () => JSON.parse(localStorage.getItem("radar-peluang.v1"))[0].plans[0],
  );
  const model = await page.evaluate(async () => {
    const app = document.querySelector("script[type=module]").src;
    const { p } = await import(app);
    const { dashboardModel } = await import(new URL("visual-model.js", app));
    const plan = JSON.parse(localStorage.getItem("radar-peluang.v1"))[0]
      .plans[0];
    return dashboardModel(plan.finance, plan.financialDetails, p);
  });
  expect(model.revenue).toBe(60000000);
  expect(model.gross).toBe(36000000);
  expect(model.net).toBe(22800000);
  expect(model.cashEnd).toBe(30800000);
  expect(model.opexAllocation.rows[1].amount).toBe(400000);
  const doc = await svg(page);
  expect(doc).toContain("#447799");
  expect(doc).toContain("60.000.000");
  expect(doc).toContain("22.800.000");
  expect(doc).toContain("Operasional");
  await page
    .locator(".visual-preview")
    .screenshot({ path: "test-results/finance-preview.png" });
  await download(
    page,
    "Unduh Financial Dashboard PNG",
    [0x89, 0x50, 0x4e, 0x47],
  );
  await download(
    page,
    "Unduh Financial Dashboard PDF",
    [0x25, 0x50, 0x44, 0x46],
  );
  await page.getByLabel("Nilai OPEX 1 (Rp)", { exact: true }).fill("1200000");
  await expect(page.getByRole("alert")).toContainText(
    "Rincian OPEX melebihi total",
  );
  await page.getByLabel("Format laporan business plan").selectOption("Excel");
  const workbook = await download(page, "Ekspor business plan", [0x50, 0x4b]);
  const dashboardRows = await sheetRows(page, workbook, "Dashboard keuangan");
  expect(dashboardRows.flat()).toContain(22800000);
  const after = await page.evaluate(
    () => JSON.parse(localStorage.getItem("radar-peluang.v1"))[0].plans[0],
  );
  expect(after.finance).toEqual(stored.finance);
  await returnToPlan(page);
  await page.getByRole("button", { name: /13\. Financial Projection/ }).click();
  expect(await svg(page)).toContain("#447799");
});

test("visual editors fit a phone and allow detailed preview zoom", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await createPlan(page);
  for (const stage of [
    /4\. Target Market/,
    /5\. Value Proposition Canvas/,
    /13\. Financial Projection/,
  ]) {
    await page.getByRole("button", { name: stage }).click();
    await svg(page);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(390);
    await page
      .getByRole("button", { name: "Perbesar pratinjau", exact: true })
      .click();
    await expect(page.locator(".visual-preview")).toHaveClass(/is-zoomed/);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(390);
  }
});

async function sheetRows(page, buffer, name) {
  return page.evaluate(
    async ({ bytes, name }) => {
      const app = document.querySelector("script[type=module]").src;
      const lib = (await import(new URL("exceljs.js", app))).e;
      const workbook = new lib.Workbook();
      await workbook.xlsx.load(new Uint8Array(bytes));
      const sheet = workbook.getWorksheet(name);
      const rows = [];
      sheet.eachRow((row) => rows.push(row.values));
      return rows;
    },
    { bytes: Array.from(buffer), name },
  );
}

test("long customer profile exports every continuation page to PDF and PNG", async ({
  page,
}) => {
  await createPlan(page);
  await page
    .getByRole("button", { name: /5\. Value Proposition Canvas/ })
    .click();
  await page
    .getByLabel("Customer jobs: kebutuhan atau pekerjaan pelanggan", {
      exact: true,
    })
    .fill(
      Array.from({ length: 14 }, (_, i) => `Kebutuhan ${i + 1}`).join("\n"),
    );
  await page
    .getByRole("button", { name: "Customer Profile", exact: true })
    .click();
  const pages = page.getByLabel("Halaman Customer Profile", { exact: true });
  const count = await pages.locator("option").count();
  expect(count).toBeGreaterThan(1);
  await pages.selectOption(String(count - 1));
  expect(await svg(page)).toContain("Kebutuhan 14");
  const pdf = await download(
    page,
    "Unduh Customer Profile PDF",
    [0x25, 0x50, 0x44, 0x46],
  );
  expect(
    (pdf.toString("latin1").match(/\/Type\s*\/Page\b/g) || []).length,
  ).toBe(count);
  const downloads = [];
  page.on("download", (d) => downloads.push(d));
  await page
    .getByRole("button", { name: "Unduh Customer Profile PNG", exact: true })
    .click();
  await expect.poll(() => downloads.length).toBe(count);
  for (const file of downloads) expect(await file.failure()).toBeNull();
});
