# Radar Peluang

Ruang kerja riset masalah konsumen dan peluang bisnis berbasis bukti. Mode lokal menyertakan 116 masalah dan 122 bukti, Business Plan 14 tahap, serta BMC dengan pengaturan font, enam warna, dan subjudul untuk setiap kotak. Proyek dan rencana tersimpan di browser yang sama.

## Menjalankan dan menguji

Gunakan Node.js 20 atau lebih baru.

```sh
npm ci
npm run build
npm run preview
```

Buka http://localhost:4173. `npm run dev` juga menyajikan hasil build; jalankan ulang build setelah menyunting sumber.

```sh
npx playwright install chromium
npm test
```

Jika Chromium tersedia di `/usr/bin/chromium`, pengujian langsung memakainya. Pengujian menjalankan situs pada subdirektori `/Busines-Plan-End-to-End/` seperti GitHub Pages, memeriksa checksum database, penyimpanan, pencarian, Business Plan, BMC, unduhan PDF/PNG/Excel, dan tampilan ponsel. Tangkapan layar tersedia di `test-results/`.

## Sumber dan desain

- `src/runtime/app.js`: aplikasi yang dipulihkan; termasuk runtime React dan pustaka yang sebelumnya dibundel.
- `src/runtime/base.css`: stylesheet asli yang dipulihkan.
- `src/runtime/theme.css`: tema pastel mengikuti referensi. Pengaturan gambar BMC tidak ditimpa tema ini.
- `src/runtime/*report.js`: laporan proyek dan Business Plan.
- `public/data/`: database dan berkas sumber asli, dipertahankan byte demi byte.
- `scripts/windows/`: skrip peluncur Windows yang dipulihkan dari ZIP terakhir; ZIP unduhan di cabang `radar-windows-download` tetap tersedia.

Baca [RECOVERY.md](RECOVERY.md) untuk asal dan keterbatasan pemulihan. Sumber JSX/TypeScript asli tidak tersedia pada cabang, riwayat, atau ZIP yang ditemukan. Modul yang dipulihkan dapat disunting dan dibangun ulang tanpa proyek aslinya. Commit pemulihan `e6b4dec` menyimpan baseline sebelum perubahan desain.

## Publikasi GitHub Pages

Repositori dialihkan GitHub ke `indahsyarefi-rah/Busines-Plan-End-to-End`. Situs memakai path relatif, sehingga tetap berjalan di subdirektori dan server lokal. Build memberi versi berdasarkan isi pada direktori aset untuk menghindari campuran cache antarrilis.

Setelah perubahan sumber di-commit, build dan tes lulus, jalankan:

```sh
node scripts/deploy-pages.mjs
```

Skrip membuat checkout terpisah dari `gh-pages`, memperbarui build, lalu melakukan push biasa tanpa force. Simpan perubahan sumber di `main` juga. Data browser menggunakan key lama `radar-peluang.v1`; deploy tidak mereset atau memigrasikannya. Gunakan URL situs dan profil browser yang sama untuk mengakses data yang sudah disimpan.
