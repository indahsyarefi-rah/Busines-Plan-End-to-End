# Laporan penelitian Radar Peluang

Status: BELUM SELESAI menyeluruh. Tanggal pemeriksaan: 2026-10-29.

## Kemampuan dan akses
Dapat membaca HTML halaman lengkap pada domain yang diizinkan, mengekstrak isi laporan dan tanggal, membuat CSV/ZIP, dan menyimpan checkpoint. Tidak tersedia alat mesin pencari web umum yang dapat dipakai; upaya Bing serta sumber BPKN, YLKI, dan OJK ditolak proxy HTTP 403. Pembatasan tidak dilewati. Sumber dapat dibaca didominasi GitHub. Ini keterbatasan cakupan, bukan keputusan untuk menganggap penelitian perangkat lunak mewakili seluruh industri.

## Daftar kata
14556 kata unik dari daftar legacy di https://github.com/damzaky/kumpulan-kata-bahasa-indonesia-KBBI/blob/master/legacy/indonesian-words.txt . README menyebut penyesuaian manual. Bukan salinan KBBI resmi yang diverifikasi. Checksum ada di checkpoint.

## Data dan perubahan
Database sebelumnya: 105 masalah, 111 bukti. Ditambah 11 masalah dan 11 bukti; total 116 masalah, 122 bukti, 50 domain sumber. Seluruh 105 masalah/bukti asal dipertahankan identik. Tidak ada penghapusan atau penggabungan masalah lama. Statistik industri diperbarui berdasarkan isi file, target 200 tidak diubah. Seluruh masalah masih belum_divalidasi.

## Sumber primer baru
13 kandidat halaman lengkap dibaca. Sebanyak 11 digunakan; 2 dikeluarkan karena konteks pengguna belum memadai atau lebih berupa audit pengembangan. Kutipan singkat dicocokkan persis dengan body halaman dan tanggal diperiksa. Keberadaan laporan diperiksa, bukan kebenaran seluruh klaim. Tidak ada reproduksi bug, wawancara, survei prevalensi, atau validasi permintaan pasar. Tidak mempublikasikan identitas/log pelapor.

Ruang lingkup tambahan: peta/navigasi, sandi, estimasi langganan, pengingat belajar, serta aksesibilitas suara/braille. Produk tetap perangkat lunak (I13 berdasarkan referensi klasifikasi lama), bukan bukti terwakilinya transportasi, pendidikan atau kesehatan secara keseluruhan. Wilayah global atau tidak diketahui; satu kasus di Georgia dan satu konteks penagihan Australia. Tidak mengubahnya menjadi bukti kondisi Indonesia. Prarilis, emulator, dan status laporan dicatat.

## Cakupan kata yang ditinjau
Seluruh entri (termasuk alias): {"belum_ada_bukti": 14475, "target_terpenuhi": 56, "baru_satu_masalah": 51, "kata_fungsi_bukan_topik": 10}

Kata daftar asli saja: {"belum_ada_bukti": 14475, "target_terpenuhi": 38, "baru_satu_masalah": 33, "kata_fungsi_bukan_topik": 10}

Entri progres mencakup seluruh daftar asli ditambah alias/topik. Relasi ditinjau konservatif pada istilah topik dan konteks laporan. Berbeda dari indeks pencarian website yang juga dapat menemukan kemunculan teks, relasi keluaran tidak menghitung sembarang ko-kemunculan sebagai bukti relevansi. Status target_terpenuhi berarti dua masalah berbeda dengan rujukan, bukan dua validasi independen atau pasar yang layak. Banyak kata belum ditelusuri karena keterbatasan akses; belum_ada_bukti tidak berarti tidak ada masalah.

## Pemeriksaan mutu
CSV dapat dibaca; ID masalah/bukti unik; semua masalah mempunyai bukti; semua relasi terhubung ke ID masalah dan bukti yang sesuai; seluruh kata asli hadir pada progres; statistik cocok; bukti baru memiliki URL/tanggal dan kutipan yang dicocokkan; tidak ada duplikasi pasangan ID relasi. Pemeriksaan kemiripan makna dilakukan pada kandidat baru terhadap data lama, bukan jaminan bebas seluruh duplikasi semantik. Sumber awal 100 masalah belum diperiksa ulang.

## Checkpoint dan pekerjaan tersisa
Lihat checkpoint.json untuk kata yang belum memenuhi target, sumber terblokir, dan langkah berikutnya. Penelitian menyeluruh belum selesai dan tidak berjalan otomatis di latar belakang. Aktivasi izin jaringan pada environment Codex diperlukan untuk memperluas penelusuran sumber Indonesia dan mesin pencari.
