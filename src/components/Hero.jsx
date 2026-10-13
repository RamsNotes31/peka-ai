export default function Hero() {
  return (
    <section className="frame hero">
      <div className="hero-main">
        <span className="dotmark tl" aria-hidden="true" />
        <p className="mono eyebrow">
          <span>peka.ai.id / pra-rilis</span>
          <Crosshair />
        </p>
        <h1>
          Produk AI untuk <mark>Indonesia,</mark> bukan hasil terjemahan.
        </h1>
        {/* Ruler bertik: motif pengukuran, sama dengan meter di papan primitif. */}
        <div className="ruler" aria-hidden="true" />
        <div className="cta-row">
          <a className="btn btn-lg" href="#akses-awal">
            Minta akses awal <span aria-hidden="true">→</span>
          </a>
          <a className="mono link" href="#produk">Lihat semua produk</a>
        </div>
      </div>
      <div className="hero-side">
        <p className="lead">
          Peka adalah kumpulan SaaS AI yang dibangun untuk konteks Indonesia: bahasa sehari-hari,
          platform yang benar-benar dipakai, dan kebiasaan lokal. Dimulai dari analisis sentimen,
          berlanjut ke produk berikutnya.
        </p>
        <dl className="mono spec-list">
          <div><dt>Fokus</dt><dd>Konteks Indonesia</dd></div>
          <div><dt>Produk pertama</dt><dd>Peka Sentimen</dd></div>
          <div><dt>Integrasi</dt><dd>Satu akun, satu API</dd></div>
          <div><dt>Status</dt><dd><span className="pill-dot" aria-hidden="true" />Beta tertutup</dd></div>
        </dl>
      </div>
    </section>
  );
}

export function Crosshair() {
  return (
    <svg className="crosshair" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <circle cx="7" cy="7" r="5" />
      <path d="M7 0v14M0 7h14" />
    </svg>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="mono eyebrow">
      <span>{children}</span>
      <Crosshair />
    </p>
  );
}
