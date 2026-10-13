import { Crosshair } from './Hero.jsx';
import { useLang } from '../i18n.jsx';
import { Bell, Radar } from './Stickers.jsx';
import { NEWS_SOURCES, WARGANET_POSTS, WOWO_SENTENCES, WOWO_SPEECH } from '../data.js';

// Four cards showing what the live tools actually produce. Values are snapshots, labeled in the UI.

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

function Field({ label, children, right, quote }) {
  return (
    <div className={`field${right ? ' right' : ''}`}>
      <span className="mono label">{label}</span>
      <span className={`value${quote ? ' quote' : ''}`}>{children}</span>
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

export default function SpecBoard() {
  const { t, lang } = useLang();
  const b = t.board;
  const post = WARGANET_POSTS[0];
  const promise = WOWO_SENTENCES.find((s) => s.label === 'Janji');
  const max = WOWO_SPEECH.labels[0][1];

  return (
    <section className="frame board-wrap" aria-labelledby="board-title">
      <div className="board-head">
        <h2 id="board-title" className="mono">{b.title}</h2>
        <span className="mono muted">{b.note}</span>
      </div>

      <div className="board">
        <article className="card">
          <CardTop n="01" label={b.product} value="Warganet AI" />
          <h3 className="mono">{b.c1.name}</h3>
          <Field label={b.c1.inLabel} quote>
            {post.src}: "KDM temukan upah pekerja proyek Underpass Cimahi dipotong Rp 20 ribu per hari"
          </Field>
          <Field label={b.c1.outLabel} quote>
            @{post.handle}: "{post.txt}"
            {lang === 'en' && <span className="gloss">{post.en}</span>}
          </Field>
          <div className="row">
            <Pill>{b.output}</Pill>
            <span className="mono">{post.topic} · {post.likes} {b.c1.likes} · {post.replies} {b.c1.replies}</span>
          </div>
        </article>

        <article className="card has-sticker">
          <Radar className="sticker-c3" />
          <CardTop n="02" label={b.product} value="Warganet AI" />
          <h3 className="mono">{b.c2.name}</h3>
          <Field label={b.c2.inLabel}>{b.c2.inText}</Field>
          <ul className="chan mono" aria-label={b.c2.sourcesLabel}>
            {NEWS_SOURCES.map((c) => <li key={c}><i aria-hidden="true" />{c}</li>)}
          </ul>
          <div className="row">
            <Pill>{b.output}</Pill>
            <span className="mono">{b.c2.out}</span>
          </div>
        </article>

        <article className="card">
          <CardTop n="03" label={b.product} value="Kata Wowo" />
          <h3 className="mono">{b.c3.name}</h3>
          <Field label={`${b.c3.inLabel} · ${promise.t}`} quote>
            "{promise.txt}"
            {lang === 'en' && <span className="gloss">{promise.en}</span>}
          </Field>
          <div className="row">
            <Pill tone="alert">{promise.label}</Pill>
            <span className="mono">{b.c3.out}</span>
          </div>
        </article>

        <article className="card has-sticker">
          <Bell className="sticker-c4" />
          <CardTop n="04" label={b.product} value="Kata Wowo" />
          <h3 className="mono">{b.c4.name}</h3>
          <Field label={b.c4.inLabel}>{WOWO_SPEECH.date} · {WOWO_SPEECH.duration} · {WOWO_SPEECH.sentences} {b.c4.sentences}</Field>
          <ol className="dist mono" aria-label={b.c4.distLabel}>
            {WOWO_SPEECH.labels.map(([name, n]) => (
              <li key={name} className={name === 'Janji' ? 'hit' : ''}>
                <span className="dist-name">{name}</span>
                <span className="dist-bar"><i style={{ width: `${Math.round((n / max) * 100)}%` }} /></span>
                <span className="dist-n">{n}</span>
              </li>
            ))}
          </ol>
          <div className="row">
            <Pill>{b.output}</Pill>
            <span className="mono">{b.c4.out}</span>
          </div>
        </article>

        <span className="dotmark br" aria-hidden="true" />
        <Crosshair />
      </div>
    </section>
  );
}
