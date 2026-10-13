import { useEffect, useRef, useState } from 'react';
import LogoMark from './Logo.jsx';
import { useLang } from '../i18n.jsx';

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const menuBtn = useRef(null);

  const links = [
    { href: '#live', label: t.nav.live },
    { href: '#produk', label: t.nav.products },
    { href: '#demo', label: t.nav.demo },
    { href: '#kenapa', label: t.nav.why },
  ];

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
        <a className="brand" href="#top" aria-label="Peka">
          <LogoMark size={20} />
          peka
        </a>
        <span className="mono meta">
          <span>{t.nav.meta[0]}</span>
          <span>{t.nav.meta[1]}</span>
        </span>

        <nav className={`nav-links${open ? ' open' : ''}`} id="nav-links" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang mono" role="group" aria-label={t.nav.lang}>
            <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
            <button type="button" aria-pressed={lang === 'id'} onClick={() => setLang('id')}>ID</button>
          </div>
          <button
            ref={menuBtn}
            className="icon-btn menu-btn"
            type="button"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
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
