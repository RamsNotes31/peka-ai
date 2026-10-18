import { useEffect, useState } from 'react';
import { useLang } from '../i18n.jsx';

// Latest posts from blog.peka.ai.id, pulled live from its JSON feed.
// The blog auto-publishes a new JSON for every social post, so this section
// stays fresh without a site rebuild. Renders nothing until the feed loads;
// stays hidden if the blog is unreachable (e.g. DNS not live yet).
const FEED_URL = 'https://blog.peka.ai.id/api/posts.json';
const BLOG_URL = 'https://blog.peka.ai.id';
const MAX_POSTS = 3;

export default function BlogUpdates() {
  const { t } = useLang();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let alive = true;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    fetch(FEED_URL, { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error('feed unavailable');
        return r.json();
      })
      .then((data) => {
        if (alive && Array.isArray(data) && data.length > 0) {
          setPosts(data.slice(0, MAX_POSTS));
        }
      })
      .catch(() => {
        /* keep hidden */
      });
    return () => {
      alive = false;
      clearTimeout(timer);
      ctrl.abort();
    };
  }, []);

  if (!posts) return null;

  return (
    <section className="frame blogup" aria-labelledby="blogup-title">
      <div className="board-head">
        <h2 id="blogup-title" className="mono">{t.blog.title}</h2>
        <span className="mono muted">{t.blog.note}</span>
      </div>
      <ol className="blogup-list">
        {posts.map((p) => (
          <li key={p.slug}>
            <a className="blogup-row" href={p.url} target="_blank" rel="noopener">
              {p.image && (
                <img className="blogup-thumb" src={p.image} alt="" loading="lazy" />
              )}
              <span className="blogup-main">
                <span className="mono muted blogup-date">{p.date}</span>
                <span className="blogup-title">{p.title}</span>
                <span className="blogup-excerpt">{p.excerpt}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
      <div className="feed-foot">
        <a className="mono link" href={BLOG_URL} target="_blank" rel="noopener">
          {t.blog.open} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
