// Karakter stiker holografik. Masing-masing dipasang di bagian yang maknanya cocok:
// Bubble = teks yang dibaca, Bell = alert tren, Radar = sumber/kanal, Lens = demo (memeriksa).
// Gradien dan stroke putih tebal sama dengan referensi visual pemilik.

function Holo({ id }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffd6f3" />
        <stop offset="0.3" stopColor="#c9f0ff" />
        <stop offset="0.55" stopColor="#fff3b0" />
        <stop offset="0.8" stopColor="#d9c8ff" />
        <stop offset="1" stopColor="#bfffe6" />
      </linearGradient>
    </defs>
  );
}

const stroke = { stroke: '#ffffff', strokeWidth: 5, strokeLinejoin: 'round', strokeLinecap: 'round' };
const ink = { fill: 'none', stroke: '#111111', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

export function Bubble({ className }) {
  return (
    <svg className={`sticker ${className || ''}`} viewBox="0 0 140 120" aria-hidden="true">
      <Holo id="holo-bubble" />
      <path d="M22 18h96a10 10 0 0 1 10 10v50a10 10 0 0 1-10 10H60l-24 22 4-22H22a10 10 0 0 1-10-10V28a10 10 0 0 1 10-10z" fill="url(#holo-bubble)" {...stroke} />
      <path d="M40 40h60M40 56h40" {...ink} />
      <circle cx="104" cy="56" r="4" fill="#111111" />
    </svg>
  );
}

export function Bell({ className }) {
  return (
    <svg className={`sticker ${className || ''}`} viewBox="0 0 120 130" aria-hidden="true">
      <Holo id="holo-bell" />
      <path d="M60 14c22 0 36 16 36 38v24l12 16H12l12-16V52c0-22 14-38 36-38z" fill="url(#holo-bell)" {...stroke} />
      <path d="M46 100c0 10 6 16 14 16s14-6 14-16" fill="url(#holo-bell)" {...stroke} />
      <path d="M60 14V6" {...ink} />
      <path d="M98 36c6 6 9 14 9 22M22 36c-6 6-9 14-9 22" {...ink} />
    </svg>
  );
}

export function Radar({ className }) {
  return (
    <svg className={`sticker ${className || ''}`} viewBox="0 0 140 140" aria-hidden="true">
      <Holo id="holo-radar" />
      <circle cx="70" cy="70" r="54" fill="url(#holo-radar)" {...stroke} />
      <circle cx="70" cy="70" r="36" {...ink} />
      <circle cx="70" cy="70" r="18" {...ink} />
      <path d="M70 70L108 40" {...ink} />
      <circle cx="94" cy="88" r="5" fill="#111111" />
      <circle cx="48" cy="52" r="4" fill="#111111" />
    </svg>
  );
}

export function Lens({ className }) {
  return (
    <svg className={`sticker ${className || ''}`} viewBox="0 0 140 140" aria-hidden="true">
      <Holo id="holo-lens" />
      <circle cx="58" cy="58" r="40" fill="url(#holo-lens)" {...stroke} />
      <path d="M88 88l34 34" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
      <path d="M88 88l34 34" stroke="#111111" strokeWidth="9" strokeLinecap="round" />
      <circle cx="58" cy="58" r="40" {...ink} />
      <path d="M38 62c6-14 16-20 30-20" {...ink} />
    </svg>
  );
}
