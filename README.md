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

## Visual Business Plan

Visual baru tersedia di dalam rencana usaha yang sama:

- **Target Market (tahap 4)**: User Persona dengan foto, profil singkat, tujuan, hambatan, merek pilihan, karakter dalam persentase, dan keterampilan bernilai 0–5.
- **Value Proposition Canvas (tahap 5)**: VPC utuh, Value Proposition, atau Customer Profile. Ketiganya memakai enam isian tahap yang sama, sehingga data lama langsung terlihat tanpa diketik ulang.
- **Financial Projection (tahap 13)**: isi asumsi angka, lalu dashboard menampilkan revenue, laba, kas akhir, titik impas, grafik kas, rincian OPEX/CAPEX, alur laba, NPV, IRR, dan payback. Tabel serta laporan Excel sebelumnya tetap tersedia.

Setiap visual memiliki enam tema, warna utama/kedua/aksen/latar/teks yang dapat disesuaikan, dan unduhan **PNG/PDF**. Ukuran teks VPC dan persona dapat diubah; teks panjang dilanjutkan pada halaman berikutnya. Tombol **Perbesar pratinjau** menampilkan detail dalam area yang dapat digulir tanpa membuat halaman ponsel melebar.

Foto persona menerima JPG/PNG/WebP hingga 8 MB dan diperkecil di browser hingga sisi terpanjang 512 piksel. Foto disimpan bersama rencana dalam localStorage, disertakan pada unduhan visual, dan dapat dihapus. Foto tidak dikirim ke server. Penyimpanan browser memiliki kapasitas terbatas; pesan penyimpanan penuh tetap berlaku.

Dashboard memakai **horizon 12 bulan**, sama dengan model proyeksi lama. Biaya variabel menjadi HPP, biaya tetap menjadi OPEX, dan pajak tetap merupakan asumsi bulanan. Rincian OPEX/CAPEX hanya mengalokasikan total, bukan menambah biaya. Sisa ditampilkan sebagai belum dialokasikan; rincian berlebih ditandai dan grafik memakai total asumsi.

Diskonto tahunan awal **10%** dapat diubah. NPV dan payback memakai pengeluaran awal sebagai investasi dan kas operasi sebagai arus masuk, tanpa memasukkan modal pendanaan sebagai laba. IRR dihitung bulanan lalu disetahunkan dan hanya ditampilkan bila arus kas konvensional mempunyai akar yang dapat dihitung. Model tidak mencakup bunga, depresiasi, nilai terminal atau piutang setelah bulan 12. Indikator merupakan proyeksi dari asumsi, bukan penilaian otomatis kelayakan usaha.

Modul baru terpisah dalam `visual-model.js`, `visual-render.js`, `visual-export.js`, `visual-plans.js`, dan `visuals.css`. Data persona dan rincian dashboard juga ikut laporan Business Plan biasa; foto terdapat pada unduhan visual persona. Pengaturan BMC dan database tidak diubah. Rencana lama tidak membutuhkan migrasi.
