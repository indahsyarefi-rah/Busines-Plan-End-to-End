import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

async function search(page, topic = "kemasan plastik") {
  await page.goto("./");
  await expect(
    page.getByText("116 masalah · 122 bukti dalam database bawaan"),
  ).toBeVisible();
  await page.getByRole("button", { name: "Cari database lokal" }).click();
  await page.getByLabel("Topik atau industri").fill(topic);
  await page
    .getByLabel("Periode", { exact: true })
    .selectOption({ label: "Semua periode" });
  await page.getByRole("button", { name: "Mulai riset", exact: true }).click();
  await expect(page.locator(".problem-row").first()).toBeVisible();
}
async function createPlan(page) {
  await search(page);
  await page.locator(".problem-row").first().click();
  await page
    .getByRole("button", { name: "Buat Business Plan", exact: true })
    .click();
  await expect(
    page
      .getByRole("navigation", { name: "Tahapan business plan" })
      .getByRole("button"),
  ).toHaveCount(14);
}
async function download(page, name, signature) {
  const event = page.waitForEvent("download");
  await page.getByRole("button", { name, exact: true }).click();
  const file = await event;
  expect(await file.failure()).toBeNull();
  const buffer = await readFile(await file.path());
  expect(buffer.length).toBeGreaterThan(1000);
  expect(buffer.subarray(0, signature.length).toString("hex")).toBe(
    Buffer.from(signature).toString("hex"),
  );
  return file;
}

test("all database and enrichment files remain byte-identical to the published release", async () => {
  const checksums = JSON.parse(await readFile("scripts/data-checksums.json"));
  for (const [name, hash] of Object.entries(checksums)) {
    for (const directory of ["public", "dist"]) {
      expect(
        createHash("sha256")
          .update(await readFile(`${directory}/${name}`))
          .digest("hex"),
        name,
      ).toBe(hash);
    }
  }
});

test("pastel workspace loads under the GitHub Pages subpath without failed requests", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("response", (r) => {
    if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
  });
  await page.goto("./");
  await expect(
    page.getByRole("heading", { name: "Proyek riset" }),
  ).toBeVisible();
  await expect(
    page.getByText("116 masalah · 122 bukti dalam database bawaan"),
  ).toBeVisible();
  await expect(page.locator(".radar-art")).toBeVisible();
  expect(
    await page
      .locator(".sidebar")
      .evaluate((e) => getComputedStyle(e).backgroundImage),
  ).toContain("gradient");
  expect(
    await page
      .locator(".page-heading .primary")
      .evaluate((e) => getComputedStyle(e).backgroundImage),
  ).toContain("249, 112, 53");
  await page.screenshot({
    path: "test-results/workspace-desktop.png",
    fullPage: true,
  });
  expect(errors).toEqual([]);
});

test("database research, evidence, saved problems and project persistence", async ({
  page,
}) => {
  await search(page);
  await expect(page.locator(".problem-row")).toHaveCount(1);
  await page.locator(".problem-row").click();
  await expect(
    page.getByRole("heading", {
      name: "Kemasan plastik gagal melindungi pangan hingga akhir masa simpan",
    }),
  ).toBeVisible();
  await page.screenshot({
    path: "test-results/problem-desktop.png",
    fullPage: true,
  });
  await page.getByRole("button", { name: "Simpan", exact: true }).click();
  await page.getByRole("tab", { name: /^Bukti\s*1$/ }).click();
  await expect(page.locator('main a[href^="http"]').first()).toBeVisible();
  await downloadResearch(page, "Excel", [0x50, 0x4b]);
  await downloadResearch(page, "PDF", [0x25, 0x50, 0x44, 0x46]);
  await page.reload();
  await expect(
    page.locator(".project-card, .project-row").first(),
  ).toBeVisible();
  const data = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("radar-peluang.v1")),
  );
  expect(data).toHaveLength(1);
  expect(data[0].problems[0].saved).toBe(true);
});

async function downloadResearch(page, format, signature) {
  await page.getByRole("button", { name: "Ekspor", exact: true }).click();
  const dialog = page.getByRole("dialog");
  await dialog
    .getByLabel("Format", { exact: true })
    .selectOption({ label: format });
  await download(page, "Unduh laporan", signature);
}

test("Business Plan, all BMC styles/subtitles persist and PDF/PNG/Excel exports work", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("response", (r) => {
    if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
  });
  await createPlan(page);
  await expect(page.getByLabel("Fokus masalah dan pelanggan")).toHaveValue(
    /Kemasan plastik/,
  );
  await page
    .getByLabel("Nama business plan", { exact: true })
    .fill("Kemasan Lestari");
  await page.getByRole("button", { name: /8\. Business Model Canvas/ }).click();
  await page
    .getByLabel("Nama usaha pada BMC", { exact: true })
    .fill("Kemasan Lestari");
  const names = [
    "Customer Segments",
    "Value Propositions",
    "Channels",
    "Customer Relationships",
    "Revenue Streams",
    "Key Resources",
    "Key Activities",
    "Key Partners",
    "Cost Structure",
  ];
  for (const [index, name] of names.entries()) {
    const block = page.locator(".bmc-block-editor").nth(index);
    await expect(block.locator("legend").first()).toHaveText(name);
    await block.locator("summary").click();
    await expect(block.getByRole("radio")).toHaveCount(6);
    await page
      .getByLabel(`Ukuran font isi ${name}`, { exact: true })
      .selectOption(String(16 + index));
    await page
      .getByLabel(`Ukuran font subjudul ${name}`, { exact: true })
      .selectOption("22");
    await page
      .getByLabel(`Ukuran font judul kotak ${name}`, { exact: true })
      .selectOption("20");
    await block
      .getByRole("radio")
      .nth(index % 6)
      .check();
    await page
      .getByLabel(name, { exact: true })
      .fill(`Isi ${name} tetap tersimpan`);
    await page
      .getByRole("button", { name: `Tambah subjudul ${name}`, exact: true })
      .click();
    await page
      .getByLabel(`Subjudul 1 ${name}`, { exact: true })
      .fill(`Analisis ${name}`);
    await page
      .getByLabel(`Isi subjudul 1 ${name}`, { exact: true })
      .fill(`Validasi ${name}`);
  }
  const stored = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("radar-peluang.v1")),
  );
  const before = stored[0].plans[0];
  expect(Object.keys(before.canvasStyles)).toHaveLength(9);
  const svg = await page.locator(".bmc-image").getAttribute("src");
  expect(decodeURIComponent(svg)).toContain("Analisis Customer Segments");
  await download(page, "Unduh BMC PNG", [0x89, 0x50, 0x4e, 0x47]);
  await download(page, "Unduh BMC PDF visual", [0x25, 0x50, 0x44, 0x46]);
  await page.getByLabel("Format laporan business plan").selectOption("PDF");
  await download(page, "Ekspor business plan", [0x25, 0x50, 0x44, 0x46]);
  await page.getByLabel("Format laporan business plan").selectOption("Excel");
  await download(page, "Ekspor business plan", [0x50, 0x4b]);
  await page.reload();
  await page
    .getByRole("button", { name: "Business Plan", exact: true })
    .click();
  await page.getByRole("button", { name: /^Kemasan Lestari/ }).click();
  await page.getByRole("button", { name: /8\. Business Model Canvas/ }).click();
  for (const [index, name] of names.entries()) {
    await expect(page.getByLabel(name, { exact: true })).toHaveValue(
      `Isi ${name} tetap tersimpan`,
    );
    await expect(
      page.getByLabel(`Subjudul 1 ${name}`, { exact: true }),
    ).toHaveValue(`Analisis ${name}`);
    await expect(
      page.getByLabel(`Isi subjudul 1 ${name}`, { exact: true }),
    ).toHaveValue(`Validasi ${name}`);
    const block = page.locator(".bmc-block-editor").nth(index);
    await block.locator("summary").click();
    await expect(
      page.getByLabel(`Ukuran font isi ${name}`, { exact: true }),
    ).toHaveValue(String(16 + index));
    await expect(block.getByRole("radio").nth(index % 6)).toBeChecked();
  }
  const after = await page.evaluate(
    () => JSON.parse(localStorage.getItem("radar-peluang.v1"))[0].plans[0],
  );
  expect(after.canvasStyles).toEqual(before.canvasStyles);
  expect(after.sections).toEqual(before.sections);
  expect(after.sourceProblem).toEqual(before.sourceProblem);
  expect(errors).toEqual([]);
});

test("mobile layout and navigation stay usable without horizontal page scrolling", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  await expect(
    page.getByRole("heading", { name: "Proyek riset" }),
  ).toBeVisible();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(390);
  await page.screenshot({
    path: "test-results/workspace-mobile.png",
    fullPage: true,
  });
  await page.locator(".mobile-menu").click();
  await expect(page.locator(".sidebar")).toHaveClass(/is-open/);
  await page.getByRole("button", { name: "Pengaturan", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Pengaturan", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".sidebar")).not.toHaveClass(/is-open/);
  await createPlan(page);
  await page.getByRole("button", { name: /8\. Business Model Canvas/ }).click();
  await expect(
    page.getByLabel("Customer Segments", { exact: true }),
  ).toBeVisible();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(390);
});
