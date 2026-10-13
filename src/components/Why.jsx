import { Eyebrow } from './Hero.jsx';
import { useLang } from '../i18n.jsx';

export default function Why() {
  const { t } = useLang();
  return (
    <section className="frame section why" id="kenapa" aria-labelledby="kenapa-title">
      <div className="why-head">
        <Eyebrow>{t.why.eyebrow}</Eyebrow>
        <h2 id="kenapa-title">{t.why.h2}</h2>
      </div>
      <dl className="why-list">
        {t.why.items.map(([title, body], i) => (
          <div className="why-item" key={title}>
            <dt><span className="mono muted">{String(i + 1).padStart(2, '0')}</span>{title}</dt>
            <dd>{body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
