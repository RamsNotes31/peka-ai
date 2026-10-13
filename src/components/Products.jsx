import { Eyebrow } from './Hero.jsx';
import { useLang } from '../i18n.jsx';

// Nama produk selain yang pertama disensor sampai siap dicoba. Nomor = urutan rilis yang direncanakan.
export default function Products() {
  const { t } = useLang();
  const p = t.products;
  return (
    <section className="frame section products" id="produk" aria-labelledby="produk-title">
      <div className="section-head">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h2 id="produk-title">{p.h2}</h2>
        <p className="muted">{p.lead}</p>
      </div>

      <ol className="product-list">
        {p.rows.map((r, i) => (
          <li className="product" key={i}>
            <span className="mono product-n">{String(i + 1).padStart(2, '0')}</span>
            <div className="product-body">
              {r.open ? (
                <h3>{r.name}</h3>
              ) : (
                <h3 className="redacted"><span className="mono">{p.comingSoon}</span></h3>
              )}
              <p>{r.body}</p>
              {r.demo && <a className="mono link" href="#demo">{p.tryDemo}</a>}
            </div>
            <div className="product-meta mono">
              <span className="muted">{r.tag}</span>
              <span className="status">{r.open ? p.beta : p.comingSoon}</span>
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
