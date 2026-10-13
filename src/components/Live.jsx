import { Eyebrow } from './Hero.jsx';
import { useLang, LINKS } from '../i18n.jsx';

const KEYS = ['warganet', 'wowo'];
const SHOTS = { warganet: '/shots/warganet.png', wowo: '/shots/wowo.png' };

export default function Live() {
  const { t } = useLang();
  const l = t.live;
  return (
    <section className="frame section live" id="live" aria-labelledby="live-title">
      <div className="section-head">
        <Eyebrow>{l.eyebrow}</Eyebrow>
        <h2 id="live-title">{l.h2}</h2>
        <p className="muted">{l.lead}</p>
      </div>

      <div className="live-grid">
        {l.items.map((item, i) => {
          const key = KEYS[i];
          return (
            <article className="live-card" key={item.name}>
              <a className="shot" href={LINKS[key]} target="_blank" rel="noopener" aria-label={`${l.open} ${item.host}`}>
                <img src={SHOTS[key]} alt={item.shotAlt} width="800" height="300" loading="lazy" />
                <span className="mono shot-cap">{item.host} · {l.shotNote}</span>
              </a>
              <div className="live-top mono">
                <span className="live-dot" aria-hidden="true" />
                <span>{item.host}</span>
                <span className="muted">{item.tag}</span>
              </div>
              <h3>{item.name}</h3>
              <p className="live-body">{item.body}</p>
              <ol className="live-facts">
                {item.facts.map((f, j) => (
                  <li key={j}><span className="mono muted">{String(j + 1).padStart(2, '0')}</span>{f}</li>
                ))}
              </ol>
              <a className="btn" href={LINKS[key]} target="_blank" rel="noopener">
                {l.open} {item.host} <span aria-hidden="true">↗</span>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
