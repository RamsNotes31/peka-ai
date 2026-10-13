import { useEffect, useRef, useState } from 'react';
import { Meter } from './SpecBoard.jsx';
import { Eyebrow } from './Hero.jsx';

// Data contoh. Model produksi belum tersambung di sini.
const SAMPLES = [
  {
    text: 'Gila sih ini CS-nya fast respon banget, masalah refund kelar dalam 10 menit. Recommended!',
    src: 'Ulasan marketplace',
    result: { verdict: 'positif', pos: 92, neu: 6, neg: 2, keys: ['fast respon', 'kelar', 'recommended'] },
  },
  {
    text: 'Paketnya udah seminggu nggak gerak, dihubungi susah. Kecewa berat sama ekspedisi ini.',
    src: 'X (Twitter)',
    result: { verdict: 'negatif', pos: 3, neu: 9, neg: 88, keys: ['nggak gerak', 'susah', 'kecewa berat'] },
  },
  {
    text: 'Baru coba fiturnya kemarin, sejauh ini oke. Nanti saya update lagi kalau udah seminggu pakai.',
    src: 'Komentar TikTok',
    result: { verdict: 'netral', pos: 34, neu: 58, neg: 8, keys: ['sejauh ini oke', 'update lagi'] },
  },
];

export default function Demo() {
  const [selected, setSelected] = useState(0);
  const [status, setStatus] = useState('empty'); // empty | loading | result
  const [result, setResult] = useState(null);
  const [filled, setFilled] = useState(false);
  const buttons = useRef([]);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  useEffect(() => {
    if (status !== 'result') { setFilled(false); return; }
    const id = setTimeout(() => setFilled(true), 30);
    return () => clearTimeout(id);
  }, [status]);

  function analyze() {
    clearTimeout(timer.current);
    setStatus('loading');
    timer.current = setTimeout(() => {
      setResult(SAMPLES[selected].result);
      setStatus('result');
    }, 600);
  }

  function onKey(e, i) {
    const n = SAMPLES.length;
    let next = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % n;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + n) % n;
    if (next === null) return;
    e.preventDefault();
    setSelected(next);
    buttons.current[next]?.focus();
  }

  const v = (x) => (filled ? x : 0);

  return (
    <section className="frame section" id="demo" aria-labelledby="demo-title">
      <div className="section-head">
        <Eyebrow>Coba sendiri</Eyebrow>
        <h2 id="demo-title">Begini Peka Sentimen membaca slang.</h2>
        <p className="muted">
          Pilih satu teks, tekan analisis. Model memecah kalimat, termasuk singkatan dan campur
          bahasa, menjadi skor. Ini contoh dari produk pertama.
        </p>
      </div>

      <div className="demo">
        <div className="demo-input">
          <p className="mono label" id="sample-label">Teks masuk</p>
          <div className="samples" role="radiogroup" aria-labelledby="sample-label">
            {SAMPLES.map((s, i) => (
              <button
                key={s.src}
                ref={(el) => { buttons.current[i] = el; }}
                className="sample"
                type="button"
                role="radio"
                aria-checked={selected === i}
                tabIndex={selected === i ? 0 : -1}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="sample-txt">{s.text}</span>
                <span className="mono muted">{s.src}</span>
              </button>
            ))}
          </div>
          <button className="btn" type="button" onClick={analyze} disabled={status === 'loading'}>
            Analisis teks
          </button>
        </div>

        <div className="demo-output" aria-live="polite">
          <div className="demo-output-head">
            <span className="mono pill">Output</span>
            <span className="mono muted">{status === 'result' ? 'contoh · bukan data live' : 'menunggu'}</span>
          </div>

          {status === 'empty' && (
            <div className="state state-empty">
              <p>Belum ada hasil. Pilih teks di kiri, lalu tekan <strong>Analisis teks</strong>.</p>
            </div>
          )}

          {status === 'loading' && (
            <div className="state">
              <p className="mono">Menganalisis...</p>
            </div>
          )}

          {status === 'result' && result && (
            <div className="state state-result">
              <p className="verdict">
                <span className="mono muted">Sentimen</span>
                <strong className="mono">{result.verdict}</strong>
              </p>
              <ul className="bars">
                <li><span className="mono">Positif</span><Meter value={v(result.pos)} tone="pos" /><span className="mono">{result.pos}%</span></li>
                <li><span className="mono">Netral</span><Meter value={v(result.neu)} tone="neu" /><span className="mono">{result.neu}%</span></li>
                <li><span className="mono">Negatif</span><Meter value={v(result.neg)} /><span className="mono">{result.neg}%</span></li>
              </ul>
              <p className="mono label">Kata pemicu</p>
              <ul className="keys mono">
                {result.keys.map((k) => <li key={k}>{k}</li>)}
              </ul>
            </div>
          )}

          <p className="mono muted note">Demo memakai data contoh. Model produksi dilatih khusus untuk Bahasa Indonesia.</p>
        </div>
      </div>
    </section>
  );
}
