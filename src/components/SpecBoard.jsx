import { Crosshair } from './Hero.jsx';
import { useLang } from '../i18n.jsx';
import { Bell, Radar } from './Stickers.jsx';

// Semua nilai di papan ini adalah contoh tampilan, bukan output model live. Diberi label di UI.

export function Meter({ value, tone }) {
  return (
    <span className={`meter${tone ? ` ${tone}` : ''}`} role="img" aria-label={`${value}%`}>
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
  const { t } = useLang();
  const b = t.board;
  return (
    <section className="frame board-wrap" aria-labelledby="board-title">
      <div className="board-head">
        <h2 id="board-title" className="mono">{b.title}</h2>
        <span className="mono muted">{b.note}</span>
      </div>

      <div className="board">
        <article className="card">
          <CardTop n="01" label={b.primitive} value={b.c1.kind} />
          <h3 className="mono">{b.c1.name}</h3>
          <Field label={b.c1.inLabel}>"pelayanan lama banget, kecewa"</Field>
          <div className="stack" role="img" aria-label="87 / 9 / 4">
            <i className="neg" style={{ width: '87%' }} />
            <i className="neu" style={{ width: '9%' }} />
            <i className="pos" style={{ width: '4%' }} />
          </div>
          <div className="row">
            <Pill>{b.output}</Pill>
            <span className="mono">{b.c1.out}</span>
          </div>
          <Field label={b.c1.conf}><Meter value={87} /><span className="mono">87%</span></Field>
        </article>

        <article className="card">
          <CardTop n="02" label={b.primitive} value={b.c2.kind} />
          <h3 className="mono">{b.c2.name}</h3>
          <Field label={b.c2.inLabel}>"CS fast respon, refund kelar 10 menit"</Field>
          <ul className="keys mono">
            <li>fast respon</li><li>kelar</li><li>refund</li>
          </ul>
          <div className="row">
            <Pill>{b.output}</Pill>
            <span className="mono">{b.c2.out}</span>
          </div>
        </article>

        <article className="card has-sticker">
          <Radar className="sticker-c3" />
          <CardTop n="03" label={b.c3.kindLabel} value={String(CHANNELS.length).padStart(2, '0')} />
          <h3 className="mono">{b.c3.name}</h3>
          <Field label={b.c3.inLabel}>{b.c3.inText}</Field>
          <ul className="chan mono">
            {CHANNELS.map((c) => <li key={c}><i aria-hidden="true" />{c}</li>)}
          </ul>
          <div className="row">
            <Pill>{b.output}</Pill>
            <span className="mono">{b.c3.out}</span>
          </div>
        </article>

        <article className="card has-sticker">
          <Bell className="sticker-c4" />
          <CardTop n="04" label={b.c4.kindLabel} value={b.c4.kind} />
          <h3 className="mono">{b.c4.name}</h3>
          <Field label={b.c4.inLabel}>{b.c4.inText}</Field>
          <ol className="dist mono">
            {TREND.map((v, i) => (
              <li key={i} className={i === 4 ? 'hit' : ''}>
                <span>D{i + 1}</span>
                <span className="dist-bar"><i style={{ width: `${v}%` }} /></span>
              </li>
            ))}
          </ol>
          <div className="row">
            <Pill tone="alert">{b.c4.alert}</Pill>
            <span className="mono">{b.c4.out}</span>
          </div>
        </article>

        <span className="dotmark br" aria-hidden="true" />
        <Crosshair />
      </div>
    </section>
  );
}
