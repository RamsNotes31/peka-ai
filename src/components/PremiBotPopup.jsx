import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n.jsx';

const BOT_URL = 'https://t.me/aeternum_premibot';
const STORE_URL = 'https://store.peka.ai.id';
const SEEN_KEY = 'premibot-popup-seen';

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.9 4.6 18.8 19.2c-.2 1-.8 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.7-7.9c.4-.3-.1-.5-.6-.2L6.7 13.1 2.1 11.7c-1-.3-1-1 .2-1.5L20.4 3.2c.8-.3 1.6.2 1.5 1.4Z" />
    </svg>
  );
}

export default function PremiBotPopup() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    let timer = null;
    try {
      if (!sessionStorage.getItem(SEEN_KEY)) timer = setTimeout(() => setOpen(true), 2500);
    } catch {
      timer = setTimeout(() => setOpen(true), 2500);
    }
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    try { sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* private mode */ }
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open ]);

  return (
    <>
      <div className={`premibot-panel${open ? ' open' : ''}`} role="dialog" aria-label={t.premibot.title} aria-hidden={!open}>
        <button ref={closeRef} type="button" className="premibot-close" onClick={() => setOpen(false)} aria-label={t.premibot.close} tabIndex={open ? 0 : -1}>×</button>
        <span className="premibot-tile" aria-hidden="true"><PlaneIcon /></span>
        <p className="mono premibot-eyebrow">{t.premibot.eyebrow}</p>
        <h3>{t.premibot.title}</h3>
        <p className="premibot-body">{t.premibot.body}</p>
        <a className="btn btn-lg premibot-cta" href={BOT_URL} target="_blank" rel="noopener" tabIndex={open ? 0 : -1}>
          <PlaneIcon />
          {t.premibot.cta}
        </a>
        <p className="mono premibot-handle">@aeternum_premibot</p>
        <a className="link premibot-catalog" href={STORE_URL} tabIndex={open ? 0 : -1}>{t.premibot.catalog} →</a>
      </div>
      <button type="button" className={`premibot-fab${open ? ' hidden' : ''}`} onClick={() => setOpen(true)} aria-label={t.premibot.open} tabIndex={open ? -1 : 0}>
        <PlaneIcon />
      </button>
    </>
  );
}
