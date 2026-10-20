import { useLang } from '../i18n.jsx';

// The fixed daily content rhythm across Peka's social accounts and blog.
// Static on purpose: this section changes only when the lineup itself does.
export default function Lineup() {
  const { t } = useLang();
  return (
    <section className="frame lineup" aria-labelledby="lineup-title">
      <div className="board-head">
        <h2 id="lineup-title" className="mono">{t.lineup.title}</h2>
        <span className="mono muted">{t.lineup.note}</span>
      </div>
      <ol className="lineup-list">
        {t.lineup.items.map((it) => (
          <li key={it.name} className="lineup-row">
            <span className="mono lineup-time">{it.time}</span>
            <span className="lineup-main">
              <span className="lineup-name">
                {it.name}
                <span className="mono muted lineup-tag">{it.tag}</span>
              </span>
              <span className="lineup-desc">{it.desc}</span>
            </span>
            <span className="mono muted lineup-where">{it.where}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
