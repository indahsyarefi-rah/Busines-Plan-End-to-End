import { cp, mkdir, rm } from "node:fs/promises";
await rm("dist", { recursive: true, force: true });
await mkdir("dist/assets", { recursive: true });
await cp("public", "dist", { recursive: true });
await cp("src/runtime", "dist/assets", { recursive: true });
await cp("index.html", "dist/index.html");
console.log("Built Radar Peluang in dist/");
