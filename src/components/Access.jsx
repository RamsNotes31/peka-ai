import { useState } from 'react';
import { Eyebrow } from './Hero.jsx';

const ENDPOINT = '/v1/akses-awal';

export default function Access() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [msg, setMsg] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    const input = e.currentTarget.elements.email;
    if (!email || !input.checkValidity()) {
      setStatus('error');
      setMsg('Masukkan alamat email yang valid.');
      input.focus();
      return;
    }
    setStatus('sending');
    setMsg('');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('ok');
      setMsg('Terdaftar. Satu email saat produk pertama dibuka.');
      setEmail('');
    } catch {
      setStatus('error');
      setMsg('Pendaftaran belum bisa diproses. Coba lagi nanti.');
    }
  }

  return (
    <section className="frame section access" id="akses-awal" aria-labelledby="akses-title">
      <div className="access-copy">
        <Eyebrow>Akses awal</Eyebrow>
        <h2 id="akses-title">Masuk daftar akses awal.</h2>
        <p className="muted">
          Satu email tiap kali produk baru dibuka. Tanpa newsletter, tanpa promosi.
        </p>
      </div>
      <form className="access-form" onSubmit={onSubmit} noValidate>
        <label htmlFor="email" className="mono label">Email kerja</label>
        <div className="field-row">
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="nama@perusahaan.id"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Mengirim' : 'Minta akses'}
          </button>
        </div>
        <p className={`form-msg mono${status === 'error' ? ' error' : ''}`} role="status" aria-live="polite">
          {msg}
        </p>
        <p className="mono muted">POST peka.ai.id{ENDPOINT}</p>
      </form>
    </section>
  );
}
