# Peka, arah desain

Dial: ENERGY 2 / RHYTHM 2 / MOTION 1

## Identitas

- Produk: Peka, kumpulan SaaS AI yang dibangun untuk konteks Indonesia. Produk pertama Peka Sentimen, lalu Monitor, Direktori, API, dan produk berikutnya yang ditentukan dari masukan pendaftar. Status: pra-rilis.
- Audiens: tim brand, social media manager, developer, dan pengguna umum di Indonesia.
- Referensi dari pemilik: vercel.com (frame bersih, hairline), dahono.com (headline besar, nada tegas), dan gambar lembar spesifikasi (label mono uppercase, crosshair, meter bertik, stiker holografik). Kuning adalah warna Peka.

## Palet

| Token | Nilai | Alasan |
|---|---|---|
| bg | #f3f3f0 | Kertas spesifikasi, bukan putih layar. Mengikuti referensi gambar |
| fg | #111111 | Tinta |
| muted | #5c5c5a | Teks sekunder, kontras 6.6:1 di atas bg |
| line | #d6d6d2 | Hairline grid |
| accent | #ffd60a | Kuning Peka, hanya sebagai isian: highlight kata "peka", logo placeholder, meter positif, garis pilihan aktif. Tidak pernah dipakai sebagai warna teks |

Stiker holografik adalah satu elemen dekoratif, satu per halaman, meniru referensi. Bukan glow, bukan gradien latar.

Motif pengukuran: ruler bertik di bawah headline, meter bertik di papan dan demo, dot-mark 3x3 di sudut hero dan papan (tanda registrasi lembar cetak). Semuanya satu bahasa: Peka mengukur.

## Tipografi

- Display dan body: Inter Tight. Rapat, netral, memberi headline besar seperti referensi tanpa bersaing dengan label mono.
- Utility: Space Mono uppercase untuk label spesifikasi, feed, dan output. Monospace di sini membawa makna: ini output mesin dan bahasa lembar spesifikasi, bukan hiasan.

## Tata letak

- Frame dua garis vertikal, section dipisah garis horizontal, tanpa ganti warna latar.
- Radius 2px pada tombol dan input, 999px hanya pada pill label. Dua nilai saja.
- Tanpa shadow kecuali drop-shadow 1px pada stiker supaya terbaca sebagai stiker tempel.

## Signature

Papan primitif: empat kartu (Sentimen, Pemicu, Sumber, Tren) yang menampilkan teks masuk, output, dan keyakinan dalam format lembar spesifikasi. Diikuti feed "Sinyal masuk" bergaya log. Keduanya adalah bentuk produk itu sendiri.

## Tema

Terang saja. Estetika kertas spesifikasi adalah identitasnya, versi gelap akan menghilangkan itu.

## Motion

Hover, transisi lebar meter 300ms saat hasil demo muncul, fade 150ms pada panel hasil. Tanpa loop, tanpa scroll-reveal. `prefers-reduced-motion` dihormati.

## Copy

Bahasa Indonesia, kalimat pendek, tanpa em dash, tanpa buzzword. Semua angka di halaman adalah contoh dan diberi label contoh.
