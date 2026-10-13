import { useLang, LINKS } from '../i18n.jsx';
import { WARGANET_POSTS } from '../data.js';

// Hot posts from Warganet AI. Snapshot, labeled in the UI.
export default function Feed() {
  const { t, lang } = useLang();
  return (
    <section className="frame feed" aria-labelledby="feed-title">
      <div className="board-head">
        <h2 id="feed-title" className="mono">{t.feed.title}</h2>
        <span className="mono muted">{t.feed.note}</span>
      </div>
      <ol className="feed-list mono">
        {WARGANET_POSTS.map((p) => (
          <li key={p.handle}>
            <span className="t">{p.t}</span>
            <span className="src">@{p.handle}</span>
            <span className="txt">
              {p.txt}
              {lang === 'en' && <span className="gloss">{p.en}</span>}
            </span>
            <span className="score">
              <i style={{ '--w': `${Math.min(100, p.likes * 4)}%` }} />
              {p.topic} · {p.likes} ♥ · {p.replies} ↩
            </span>
          </li>
        ))}
      </ol>
      <div className="feed-foot">
        <a className="mono link" href={LINKS.warganet} target="_blank" rel="noopener">
          {t.feed.open} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
