import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";

// One content version for the module graph also handles circular report imports.
const entries = (await readdir("src/runtime")).sort();
const hash = createHash("sha256");
hash.update(await readFile("index.html"));
for (const name of entries)
  hash.update(name).update(await readFile(`src/runtime/${name}`));
const version = hash.digest("hex").slice(0, 12);
const assets = `assets/${version}`;
await rm("dist", { recursive: true, force: true });
await mkdir(`dist/${assets}`, { recursive: true });
await cp("public", "dist", { recursive: true });
for (const name of entries) {
  const source = await readFile(`src/runtime/${name}`, "utf8");
  await writeFile(
    `dist/${assets}/${name}`,
    source.replaceAll('"assets/', `"${assets}/`),
  );
}
await writeFile(
  "dist/index.html",
  (await readFile("index.html", "utf8")).replaceAll(
    "./assets/",
    `./${assets}/`,
  ),
);
console.log(`Built Radar Peluang in dist/ (${version})`);
