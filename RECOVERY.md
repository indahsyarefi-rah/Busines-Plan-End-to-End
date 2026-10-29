# Source recovery — 2026-10-29

Inspected all remote branches and their complete reachable history: main (d1f61ee), gh-pages (dbe73ba), radar-windows-download (20dcfe8). No tags, original project source, source maps, or unreachable source objects were found. No additional application copies were found in the attached workspace. The Windows ZIP contains dist/ and a portable server, not the original project.

src/runtime is readable JavaScript/CSS recovered from the latest gh-pages build. It includes bundled React and third-party code; original JSX/TypeScript, names, and comments cannot be reconstructed faithfully. This is a maintainable recovery baseline, not a claim to have found the original authoring source. Dynamic report modules and all export libraries are preserved. Original module filenames were renamed consistently. Absolute paths for the former Busines-Plan-End-to-End repository were made relative to support this repository and local hosting.

All public/data files are byte-for-byte copies of gh-pages dbe73ba, including original uploads and enrichment ZIP. Windows launch/server scripts were recovered separately. Local-storage schema, Business Plan stages, BMC editing, per-block fonts, six colors, subtitles and exports are retained in the application module.

Before visual edits, the recovered baseline is committed separately. Rebuild with npm ci && npm run build; preview with npm run preview. No external service or database credentials are required for local mode.
