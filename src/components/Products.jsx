import { Eyebrow } from './Hero.jsx';

// Nomor urut menyatakan urutan rilis yang direncanakan.
const PRODUCTS = [
  {
    name: 'Peka Sentimen',
    tag: 'Bahasa · Media sosial',
    body: 'Skor sentimen, tren harian, dan kata pemicu untuk teks Bahasa Indonesia dari X, TikTok, Instagram, ulasan marketplace, dan Google Maps.',
    demo: true,
  },
  {
    name: 'Peka Monitor',
    tag: 'Brand · Isu publik',
    body: 'Pantau brand, produk, atau isu terus-menerus. Alert saat sentimen anjlok atau percakapan melonjak tidak wajar.',
  },
  {
    name: 'Peka Direktori',
    tag: 'Kurasi · Review',
    body: 'Direktori SaaS AI yang diuji langsung untuk pengguna Indonesia. Ringkasan jujur: apa yang bagus, apa yang tidak, berapa harganya dalam rupiah.',
  },
  {
    name: 'Peka API',
    tag: 'Developer · SDK',
    body: 'Semua kemampuan Peka lewat satu endpoint. Kirim teks, terima skor, entitas, dan ringkasan. SDK untuk JS dan Python.',
  },
];

export default function Products() {
  return (
    <section className="frame section products" id="produk" aria-labelledby="produk-title">
      <div className="section-head">
        <Eyebrow>Produk</Eyebrow>
        <h2 id="produk-title">Satu platform, banyak produk. Dirilis satu per satu.</h2>
        <p className="muted">
          Semua dibangun untuk konteks Indonesia dan masih dalam pengerjaan. Pendaftar akses awal
          mencoba tiap produk begitu rilis, tanpa antre.
        </p>
      </div>

      <ol className="product-list">
        {PRODUCTS.map((p, i) => (
          <li className="product" key={p.name}>
            <span className="mono product-n">{String(i + 1).padStart(2, '0')}</span>
            <div className="product-body">
              <h3>{p.name}</h3>
              <p>{p.body}</p>
              {p.demo && <a className="mono link" href="#demo">Coba demonya</a>}
            </div>
            <div className="product-meta mono">
              <span className="muted">{p.tag}</span>
              <span className="status">Segera</span>
            </div>
          </li>
        ))}
        <li className="product product-next">
          <span className="mono product-n">{String(PRODUCTS.length + 1).padStart(2, '0')}</span>
          <div className="product-body">
            <h3>Produk berikutnya</h3>
            <p>Ditentukan dari masalah yang paling sering dikirim pendaftar akses awal. Belum ada nama, belum ada janji.</p>
          </div>
          <div className="product-meta mono">
            <span className="muted">Terbuka</span>
            <span className="status">Direncanakan</span>
          </div>
        </li>
      </ol>
    </section>
  );
}
