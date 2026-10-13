import { Eyebrow } from './Hero.jsx';
import { useLang, LINKS } from '../i18n.jsx';

// Live tools link out. Unnamed rows stay censored until they are ready to try. Numbers = release order.
export default function Products() {
  const { t } = useLang();
  const p = t.products;
  const statusLabel = { live: p.live, beta: p.beta, soon: p.comingSoon };
  return (
    <section className="frame section products" id="produk" aria-labelledby="produk-title">
      <div className="section-head">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h2 id="produk-title">{p.h2}</h2>
        <p className="muted">{p.lead}</p>
      </div>

      <ol className="product-list">
        {p.rows.map((r, i) => (
          <li className={`product status-${r.status}`} key={i}>
            <span className="mono product-n">{String(i + 1).padStart(2, '0')}</span>
            <div className="product-body">
              {r.name ? (
                <h3>{r.name}</h3>
              ) : (
                <h3 className="redacted"><span className="mono">{p.comingSoon}</span></h3>
              )}
              <p>{r.body}</p>
              {r.demo && <a className="mono link" href="#demo">{p.tryDemo}</a>}
              {r.link && (
                <a className="mono link" href={LINKS[r.link]} target="_blank" rel="noopener">
                  {p.open} {LINKS[r.link].replace('https://', '')} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
            <div className="product-meta mono">
              <span className="muted">{r.tag}</span>
              <span className="status">{statusLabel[r.status]}</span>
            </div>
          </li>
        ))}
        <li className="product product-next">
          <span className="mono product-n">{String(p.rows.length + 1).padStart(2, '0')}</span>
          <div className="product-body">
            <h3>{p.next.name}</h3>
            <p>{p.next.body}</p>
          </div>
          <div className="product-meta mono">
            <span className="muted">{p.next.tag}</span>
            <span className="status">{p.next.status}</span>
          </div>
        </li>
      </ol>
    </section>
  );
}
