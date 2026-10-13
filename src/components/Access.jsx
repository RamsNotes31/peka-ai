import { useState } from 'react';
import { Eyebrow } from './Hero.jsx';
import { useLang } from '../i18n.jsx';

const ENDPOINT = '/v1/early-access';

export default function Access() {
  const { t, lang } = useLang();
  const a = t.access;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | ok | invalid | error

  async function onSubmit(e) {
    e.preventDefault();
    const input = e.currentTarget.elements.email;
    if (!email || !input.checkValidity()) {
      setStatus('invalid');
      input.focus();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, lang }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('ok');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  const msg = { ok: a.ok, invalid: a.invalid, error: a.error }[status] || '';

  return (
    <section className="frame section access" id="akses-awal" aria-labelledby="akses-title">
      <div className="access-copy">
        <Eyebrow>{a.eyebrow}</Eyebrow>
        <h2 id="akses-title">{a.h2}</h2>
        <p className="muted">{a.lead}</p>
      </div>
      <form className="access-form" onSubmit={onSubmit} noValidate>
        <label htmlFor="email" className="mono label">{a.label}</label>
        <div className="field-row">
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={a.placeholder}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? a.sending : a.button}
          </button>
        </div>
        <p className={`form-msg mono${status === 'error' || status === 'invalid' ? ' error' : ''}`} role="status" aria-live="polite">
          {msg}
        </p>
        <p className="mono muted">POST peka.ai.id{ENDPOINT}</p>
      </form>
    </section>
  );
}
