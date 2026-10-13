import { Crosshair } from './Hero.jsx';

// Semua nilai di papan ini adalah contoh tampilan, bukan output model live. Diberi label di UI.

export function Meter({ value, tone }) {
  return (
    <span className={`meter${tone ? ` ${tone}` : ''}`} role="img" aria-label={`${value} persen`}>
      <i style={{ width: `${value}%` }} />
    </span>
  );
}

function Pill({ children, tone }) {
  return <span className={`mono pill${tone ? ` ${tone}` : ''}`}>{children}</span>;
}

function Field({ label, children, right }) {
  return (
    <div className={`field${right ? ' right' : ''}`}>
      <span className="mono label">{label}</span>
      <span className="value">{children}</span>
    </div>
  );
}

function CardTop({ n, label, value }) {
  return (
    <div className="card-top">
      <span className="mono tiny">{n}</span>
      <Field label={label} right>{value}</Field>
    </div>
  );
}

const CHANNELS = ['X', 'TikTok', 'Instagram', 'Tokopedia', 'Shopee', 'Google Maps'];
const TREND = [62, 58, 70, 74, 41, 38, 55];

export default function SpecBoard() {
  return (
    <section className="frame board-wrap" aria-labelledby="board-title">
      <div className="board-head">
        <h2 id="board-title" className="mono">Produk pertama: Peka Sentimen</h2>
        <span className="mono muted">contoh tampilan, bukan data live</span>
      </div>

      <div className="board">
        <Sticker />

        <article className="card">
          <CardTop n="01" label="Primitif" value="Sentimen" />
          <h3 className="mono">Sentimen</h3>
          <Field label="Teks masuk">"pelayanan lama banget, kecewa"</Field>
          <div className="stack" role="img" aria-label="Negatif 87 persen, netral 9 persen, positif 4 persen">
            <i className="neg" style={{ width: '87%' }} />
            <i className="neu" style={{ width: '9%' }} />
            <i className="pos" style={{ width: '4%' }} />
          </div>
          <div className="row">
            <Pill>Output</Pill>
            <span className="mono">negatif · 0.87</span>
          </div>
          <Field label="Keyakinan"><Meter value={87} /><span className="mono">87%</span></Field>
        </article>

        <article className="card">
          <CardTop n="02" label="Primitif" value="Kata pemicu" />
          <h3 className="mono">Pemicu</h3>
          <Field label="Teks masuk">"CS fast respon, refund kelar 10 menit"</Field>
          <ul className="keys mono" aria-label="Kata pemicu contoh">
            <li>fast respon</li><li>kelar</li><li>refund</li>
          </ul>
          <div className="row">
            <Pill>Output</Pill>
            <span className="mono">3 frasa · arah positif</span>
          </div>
        </article>

        <article className="card">
          <CardTop n="03" label="Kanal" value={String(CHANNELS.length).padStart(2, '0')} />
          <h3 className="mono">Sumber</h3>
          <Field label="Dipantau">Satu stream untuk semua kanal</Field>
          <ul className="chan mono" aria-label="Kanal yang dipantau">
            {CHANNELS.map((c) => <li key={c}><i aria-hidden="true" />{c}</li>)}
          </ul>
          <div className="row">
            <Pill>Output</Pill>
            <span className="mono">1 skema JSON</span>
          </div>
        </article>

        <article className="card">
          <CardTop n="04" label="Rentang" value="7 hari" />
          <h3 className="mono">Tren</h3>
          <Field label="Skor harian">Rata-rata sentimen per hari</Field>
          <ol className="dist mono" aria-label="Tren contoh tujuh hari">
            {TREND.map((v, i) => (
              <li key={i} className={i === 4 ? 'hit' : ''}>
                <span>H{i + 1}</span>
                <span className="dist-bar"><i style={{ width: `${v}%` }} /></span>
              </li>
            ))}
          </ol>
          <div className="row">
            <Pill tone="alert">Alert</Pill>
            <span className="mono">H5 turun 33 poin</span>
          </div>
        </article>

        <span className="dotmark br" aria-hidden="true" />
        <Crosshair />
      </div>
    </section>
  );
}

// Satu stiker holografik, meniru referensi. Satu-satunya elemen dekoratif di halaman.
function Sticker() {
  return (
    <svg className="sticker" viewBox="0 0 200 140" aria-hidden="true">
      <defs>
        <linearGradient id="holo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd6f3" />
          <stop offset="0.3" stopColor="#c9f0ff" />
          <stop offset="0.55" stopColor="#fff3b0" />
          <stop offset="0.8" stopColor="#d9c8ff" />
          <stop offset="1" stopColor="#bfffe6" />
        </linearGradient>
      </defs>
      <path
        d="M60 20c20-18 50-14 66 2 14-10 40-6 46 14 16 4 24 24 14 38 10 14 2 36-16 40-8 18-34 22-48 10-16 12-42 8-52-8-20 2-36-14-32-32C22 72 24 48 42 42c-2-10 6-20 18-22z"
        fill="url(#holo)"
        stroke="#ffffff"
        strokeWidth="4"
      />
    </svg>
  );
}
