import { useLang } from '../i18n.jsx';

export default function Footer() {
  const { t } = useLang();
  const links = [
    { href: '#live', label: t.nav.live },
    { href: '#produk', label: t.nav.products },
    { href: '#demo', label: t.nav.demo },
    { href: '#kenapa', label: t.nav.why },
    { href: '#akses-awal', label: t.nav.access },
  ];
  return (
    <footer className="frame footer mono">
      <span>peka.ai.id</span>
      <nav aria-label="Footer" className="footer-links">
        {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
      </nav>
      <span className="muted">{t.footer.made} · {new Date().getFullYear()}</span>
    </footer>
  );
}
