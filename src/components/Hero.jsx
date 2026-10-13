import { useLang } from '../i18n.jsx';
import { Bubble } from './Stickers.jsx';

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="frame hero">
      <div className="hero-main">
        <span className="dotmark tl" aria-hidden="true" />
        <p className="mono eyebrow">
          <span>{t.hero.eyebrow}</span>
          <Crosshair />
        </p>
        <h1>
          {t.hero.h1a}<mark>{t.hero.h1mark}</mark>{t.hero.h1b}
        </h1>
        {/* Ruler bertik: motif pengukuran, sama dengan meter di papan primitif. */}
        <div className="ruler" aria-hidden="true" />
        <div className="cta-row">
          <a className="btn btn-lg" href="#akses-awal">
            {t.hero.cta} <span aria-hidden="true">→</span>
          </a>
          <a className="mono link" href="#produk">{t.hero.link}</a>
        </div>
      </div>
      <div className="hero-side">
        <Bubble className="sticker-hero" />
        <p className="lead">{t.hero.lead}</p>
        <dl className="mono spec-list">
          {t.hero.spec.map(([k, v], i) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{i === 3 && <span className="pill-dot" aria-hidden="true" />}{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Crosshair() {
  return (
    <svg className="crosshair" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <circle cx="7" cy="7" r="5" />
      <path d="M7 0v14M0 7h14" />
    </svg>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="mono eyebrow">
      <span>{children}</span>
      <Crosshair />
    </p>
  );
}
