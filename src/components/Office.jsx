import { Eyebrow } from './Hero.jsx';
import { useLang, LINKS } from '../i18n.jsx';

export default function Office() {
  const { t } = useLang();
  const o = t.office;
  return (
    <section className="frame section office" id="kantor" aria-labelledby="office-title">
      <div className="section-head">
        <Eyebrow>{o.eyebrow}</Eyebrow>
        <h2 id="office-title">{o.h2}</h2>
        <p className="muted">{o.lead}</p>
      </div>

      <div className="office-frame">
        <div className="office-bar mono">
          <span className="live-dot" aria-hidden="true" />
          <span>{o.bar}</span>
          <span className="muted office-bar-host">virtual.peka.ai.id</span>
        </div>
        <iframe
          className="office-iframe"
          src="/kantor-virtual/"
          title={o.frameTitle}
          loading="lazy"
        />
      </div>

      <div className="office-cta">
        <a className="btn" href={LINKS.virtual} target="_blank" rel="noopener">
          {o.cta} <span aria-hidden="true">↗</span>
        </a>
        <span className="mono muted">{o.note}</span>
      </div>
    </section>
  );
}
