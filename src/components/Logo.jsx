// Tanda Peka: kotak kuning dengan crosshair. Crosshair dipakai di seluruh halaman sebagai motif
// "mengukur dan memperhatikan", jadi logo dan UI satu bahasa.
export default function LogoMark({ size = 18 }) {
  return (
    <svg
      className="logo-mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="6" fill="#ffd60a" />
      <circle cx="16" cy="16" r="7" fill="none" stroke="#111111" strokeWidth="2" />
      <path d="M16 3v6M16 23v6M3 16h6M23 16h6" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2.2" fill="#111111" />
    </svg>
  );
}
