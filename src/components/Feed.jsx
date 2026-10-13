import { useLang } from '../i18n.jsx';

// Baris contoh. Diberi label di UI.
const ROWS = [
  { t: '12:04:11', src: 'X', txt: 'akhirnya kesampaian nonton konsernya, pecah banget!', s: 'pos', n: 94 },
  { t: '12:03:48', src: 'TikTok', txt: 'packaging penyok, unboxing gagal total', s: 'neg', n: 88 },
  { t: '12:02:19', src: 'Tokopedia', txt: 'pengiriman cepat, barang sesuai deskripsi', s: 'pos', n: 91 },
  { t: '12:01:33', src: 'Maps', txt: 'parkir susah, tapi makanannya enak', s: 'neu', n: 62 },
  { t: '12:00:57', src: 'Instagram', txt: 'kecewa, CS susah dihubungi dari kemarin', s: 'neg', n: 85 },
  { t: '11:59:44', src: 'X', txt: 'fitur barunya ngebantu banget buat kerjaan', s: 'pos', n: 89 },
];

export default function Feed() {
  const { t } = useLang();
  return (
    <section className="frame feed" aria-labelledby="feed-title">
      <div className="board-head">
        <h2 id="feed-title" className="mono">{t.feed.title}</h2>
        <span className="mono muted">{t.feed.note}</span>
      </div>
      <ol className="feed-list mono">
        {ROWS.map((r, i) => (
          <li key={r.t}>
            <span className="t">{r.t}</span>
            <span className="src">{r.src}</span>
            <span className="txt">
              {r.txt}
              {t.feed.gloss && <span className="gloss">{t.feed.gloss[i]}</span>}
            </span>
            <span className={`score ${r.s}`}>
              <i style={{ '--w': `${r.n}%` }} />
              {t.feed.labels[r.s]} {r.n}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
