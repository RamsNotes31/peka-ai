import { useLang } from '../i18n.jsx';
import { Eyebrow } from './Hero.jsx';

const URLS = {
  Instagram: 'https://www.instagram.com/peka.ai.id',
  Threads: 'https://www.threads.com/@peka.ai.id',
  Facebook: 'https://www.facebook.com/peka.ai.id',
};

// Peka AI's own social accounts. Same content as the blog, posted twice daily.
export default function Social() {
  const { t } = useLang();
  return (
    <section className="frame section social" id="sosmed" aria-labelledby="social-title">
      <div className="section-head">
        <Eyebrow>{t.social.eyebrow}</Eyebrow>
        <h2 id="social-title">{t.social.h2}</h2>
        <p className="muted">{t.social.lead}</p>
      </div>
      <div className="social-grid">
        {t.social.items.map((s) => (
          <a
            key={s.name}
            className="social-card"
            href={URLS[s.name]}
            target="_blank"
            rel="noopener"
          >
            <span className="mono muted">{s.name}</span>
            <span className="social-handle">{s.handle}</span>
            <span className="social-desc">{s.desc}</span>
            <span className="mono link">{t.social.open} <span aria-hidden="true">↗</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}
