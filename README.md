<p align="left">
  <img src="public/logo.svg" alt="Peka" width="150">
</p>

# Peka

Landing page pra-rilis untuk [peka.ai.id](https://peka.ai.id). Peka adalah kumpulan produk SaaS AI yang dibangun untuk konteks Indonesia: bahasa sehari-hari, platform yang benar-benar dipakai, dan kebiasaan lokal. Produk pertama adalah analisis sentimen Bahasa Indonesia.

Dibangun dengan Vite dan React, CSS murni, tanpa library UI.

## Isi halaman

| Section | Isi |
|---|---|
| Hero | Headline, ruler bertik, CTA akses awal, spesifikasi singkat |
| Produk pertama | Papan empat kartu (Sentimen, Pemicu, Sumber, Tren) bergaya lembar spesifikasi |
| Sinyal masuk | Feed contoh bergaya log, enam baris |
| Produk | Roadmap bernomor: Peka Sentimen, Monitor, Direktori, API, dan slot produk berikutnya |
| Demo | Pilih teks contoh, tekan analisis, lihat skor dan kata pemicu |
| Kenapa Peka | Tiga alasan dalam bentuk daftar definisi |
| Akses awal | Form email dengan state loading, sukses, dan gagal |

Semua angka di halaman adalah contoh tampilan dan diberi label "contoh, bukan data live" di UI.

## Menjalankan

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka http://localhost:5173.

Perintah lain:

```bash
npm run build     # build produksi ke dist/
npm run preview   # jalankan hasil build secara lokal
```

## Struktur

```
.
├── index.html                 # entry Vite, font, favicon, meta
├── public/
│   ├── favicon.svg            # tanda Peka
│   ├── logo.svg               # tanda + wordmark, latar terang
│   └── logo-dark.svg          # tanda + wordmark, latar gelap
├── src/
│   ├── main.jsx
│   ├── App.jsx                # urutan section
│   ├── index.css              # semua style, token di :root
│   └── components/
│       ├── Nav.jsx            # navbar sticky, menu mobile
│       ├── Logo.jsx           # komponen tanda Peka
│       ├── Hero.jsx           # hero, Crosshair, Eyebrow
│       ├── SpecBoard.jsx      # papan primitif, Meter, stiker
│       ├── Feed.jsx           # feed sinyal contoh
│       ├── Products.jsx       # roadmap produk
│       ├── Demo.jsx           # demo interaktif
│       ├── Why.jsx            # kenapa Peka
│       ├── Access.jsx         # form akses awal
│       └── Footer.jsx
├── DESIGN.md                  # arah desain dan alasan tiap keputusan
└── vite.config.js
```

## Desain

Arah lengkap ada di [DESIGN.md](DESIGN.md). Ringkasnya:

- Estetika lembar spesifikasi di atas frame bergaya Vercel: latar kertas `#f3f3f0`, hairline `#d6d6d2`, dua garis vertikal pembatas konten.
- Tipografi: Inter Tight untuk headline dan body, Space Mono uppercase untuk label, feed, dan output.
- Kuning Peka `#ffd60a` hanya sebagai isian (highlight, logo, meter positif, pill alert). Tidak pernah sebagai warna teks.
- Motif pengukuran: ruler bertik, meter bertik, crosshair, dot-mark sudut. Logo memakai crosshair yang sama.
- Satu elemen dekoratif: stiker holografik di papan primitif.
- Tema terang saja. Motion hanya hover dan transisi state.

Token warna dan font ada di `:root` pada `src/index.css`. Ganti di sana, bukan per komponen.

## Logo

Tanda Peka adalah kotak kuning dengan crosshair: lingkaran, empat garis, titik di tengah. Artinya memperhatikan dan mengukur, sama dengan motif di seluruh halaman.

- `public/favicon.svg`: tanda saja, 32x32.
- `public/logo.svg`: tanda dan wordmark untuk latar terang.
- `public/logo-dark.svg`: tanda dan wordmark untuk latar gelap.
- `src/components/Logo.jsx`: komponen React, prop `size` dalam piksel.

Wordmark memakai Inter Tight 600. Kalau font tidak tersedia, SVG jatuh ke Inter atau Arial.

Ikon raster (`favicon.ico`, `favicon-48.png`, `favicon-96.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `og.png`) dibuat oleh `scripts/gen-icons.mjs` tanpa dependensi. Jalankan ulang kalau tanda berubah:

```bash
node scripts/gen-icons.mjs
```

## SEO

- `public/robots.txt` mengizinkan semua crawler dan menunjuk ke `sitemap.xml`.
- `public/sitemap.xml` berisi satu URL: `https://peka.ai.id/`.
- `index.html` memuat canonical, meta robots, Open Graph, Twitter card, JSON-LD (Organization, WebSite), dan fallback `noscript` berisi ringkasan konten.
- Setelah deploy, daftarkan domain di [Google Search Console](https://search.google.com/search-console), kirim `https://peka.ai.id/sitemap.xml`, lalu minta pengindeksan untuk halaman utama. Ini langkah manual, tidak bisa dilakukan dari kode.

## Yang belum tersambung

- **Form akses awal** mengirim `POST /v1/akses-awal` dengan body `{ "email": "..." }`. Belum ada backend. UI menampilkan pesan gagal yang jujur sampai endpoint tersedia. Endpoint diatur di `src/components/Access.jsx`.
- **Demo analisis** memakai data contoh di `SAMPLES` pada `src/components/Demo.jsx`. Ganti fungsi `analyze` dengan panggilan API saat model siap.
- **Baris "Produk berikutnya"** di roadmap sengaja kosong. Isi saat produk kelima sudah ditentukan.

## Deploy

Output `npm run build` adalah situs statis di `dist/`. Bisa di-deploy ke Vercel, Netlify, Cloudflare Pages, atau server statis apa pun.

Untuk Vercel: import repo, framework terdeteksi sebagai Vite, tidak perlu konfigurasi tambahan.

## Aksesibilitas

- Semua kontrol bisa dijangkau keyboard. Fokus terlihat (outline 2px).
- Menu mobile tutup dengan Escape. Pilihan contoh di demo adalah radiogroup dengan navigasi panah.
- Kontras teks sekunder `#5c5c5a` di atas `#f3f3f0` adalah 6.6:1.
- `prefers-reduced-motion` mematikan semua transisi.

## Lisensi

Belum ditentukan.
