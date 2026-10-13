const LINKS = [
  { href: '#produk', label: 'Produk' },
  { href: '#demo', label: 'Demo' },
  { href: '#kenapa', label: 'Kenapa Peka' },
  { href: '#akses-awal', label: 'Akses awal' },
];

export default function Footer() {
  return (
    <footer className="frame footer mono">
      <span>peka.ai.id</span>
      <nav aria-label="Tautan footer" className="footer-links">
        {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
      </nav>
      <span className="muted">Dibuat di Indonesia · {new Date().getFullYear()}</span>
    </footer>
  );
}
