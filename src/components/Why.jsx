import { Eyebrow } from './Hero.jsx';

const REASONS = [
  {
    title: 'Paham bahasa sehari-hari',
    body: 'Dari "wkwk" sampai "kecewa berat". Model dilatih pada teks Indonesia asli, termasuk singkatan dan campur bahasa daerah.',
  },
  {
    title: 'Mengikuti platform yang dipakai orang Indonesia',
    body: 'X, TikTok, Instagram, Tokopedia, Shopee, Google Maps. Bukan hanya platform yang populer di luar negeri.',
  },
  {
    title: 'Satu akun untuk semua produk',
    body: 'Satu login, satu API key, satu tagihan dalam rupiah. Produk baru langsung tersedia tanpa daftar ulang.',
  },
];

export default function Why() {
  return (
    <section className="frame section why" id="kenapa" aria-labelledby="kenapa-title">
      <div className="why-head">
        <Eyebrow>Kenapa Peka</Eyebrow>
        <h2 id="kenapa-title">Dibuat untuk konteks Indonesia.</h2>
      </div>
      <dl className="why-list">
        {REASONS.map((r, i) => (
          <div className="why-item" key={r.title}>
            <dt><span className="mono muted">{String(i + 1).padStart(2, '0')}</span>{r.title}</dt>
            <dd>{r.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
