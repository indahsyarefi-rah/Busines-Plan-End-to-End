import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
const root = fileURLToPath(new URL("../dist/", import.meta.url));
const host = "127.0.0.1",
  port = 5173,
  url = `http://${host}:${port}`;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};
const server = http.createServer(async (req, res) => {
  const respond = (status, body, type = "text/plain; charset=utf-8") => {
    res.writeHead(status, {
      "Content-Type": type,
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-store",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Frame-Options": "DENY",
    });
    res.end(req.method === "HEAD" ? undefined : body);
  };
  if (!["GET", "HEAD"].includes(req.method || "")) {
    respond(405, "Metode tidak didukung.");
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(req.url || "/", url).pathname);
    if (pathname === "/api/config") {
      respond(
        200,
        JSON.stringify({ configured: false, researchConfigured: false }),
        "application/json",
      );
      return;
    }
    if (pathname.startsWith("/api/")) {
      respond(
        503,
        JSON.stringify({
          error:
            "Paket laptop ini menggunakan riset manual dan penyimpanan lokal.",
        }),
        "application/json",
      );
      return;
    }
    const file = resolve(
      root,
      "." + (pathname === "/" ? "/index.html" : pathname),
    );
    if (!file.startsWith(resolve(root) + sep)) {
      respond(403, "Akses ditolak.");
      return;
    }
    if (!(await stat(file)).isFile()) {
      respond(404, "File tidak ditemukan.");
      return;
    }
    respond(
      200,
      await readFile(file),
      types[extname(file)] || "application/octet-stream",
    );
  } catch {
    respond(
      404,
      "File tidak ditemukan. Pastikan folder dist tetap bersama aplikasi.",
    );
  }
});
server.on("error", (error) => {
  console.error(
    error.code === "EADDRINUSE"
      ? "Port 5173 sedang digunakan. Tutup jendela Radar Peluang lain, kemudian coba lagi."
      : `Aplikasi tidak dapat dijalankan: ${error.message}`,
  );
  process.exitCode = 1;
});
server.listen(port, host, () => {
  console.log(
    `\nRadar Peluang siap digunakan.\nBuka browser: ${url}\n\nBiarkan jendela ini terbuka selama menggunakan aplikasi.\nTekan Ctrl+C untuk berhenti.\n\nMode lokal: database bawaan dapat dicari tanpa internet. Proyek tersimpan di browser ini. Ekspor laporan secara rutin.\nTidak ada koneksi database cloud atau API berbayar pada paket ini.\n`,
  );
  if (process.platform === "win32" && !process.argv.includes("--no-open")) {
    // Pass the URL directly to Windows Explorer, without cmd/start quoting.
    const explorer = join(
      process.env.SystemRoot || "C:\\Windows",
      "explorer.exe",
    );
    execFile(explorer, [url], { windowsHide: true }, (error) => {
      if (error)
        console.log(`Jika browser belum terbuka, buka sendiri: ${url}`);
    });
  }
});
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => server.close(() => process.exit(0)));
