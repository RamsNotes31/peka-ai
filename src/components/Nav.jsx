import { useEffect, useRef, useState } from 'react';
import LogoMark from './Logo.jsx';

const LINKS = [
  { href: '#produk', label: 'Produk' },
  { href: '#demo', label: 'Demo' },
  { href: '#kenapa', label: 'Kenapa Peka' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuBtn = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === 'Escape') {
        setOpen(false);
        menuBtn.current?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="frame nav-inner">
        <a className="brand" href="#top" aria-label="Peka, beranda">
          <LogoMark size={20} />
          peka
        </a>
        <span className="mono meta">
          <span>V0.1</span>
          <span>Pra-rilis</span>
        </span>

        <nav className={`nav-links${open ? ' open' : ''}`} id="nav-links" aria-label="Navigasi utama">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-sm" href="#akses-awal">Akses awal</a>
          <button
            ref={menuBtn}
            className="icon-btn menu-btn"
            type="button"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
