import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n.jsx';

const API_URL = '/api/chat';
const STORE_KEY = 'peka-chat-history';
const MAX_STORED = 30;

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      <circle cx="8.5" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.9 4.6 18.8 19.2c-.2 1-.8 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.7-7.9c.4-.3-.1-.5-.6-.2L6.7 13.1 2.1 11.7c-1-.3-1-1 .2-1.5L20.4 3.2c.8-.3 1.6.2 1.5 1.4Z" />
    </svg>
  );
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string');
  } catch {
    return [];
  }
}

export default function ChatBot() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(loadHistory);
  const [input, setInput] = useState('');
  const [waiting, setWaiting] = useState(false);
  const closeRef = useRef(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(messages.slice(-MAX_STORED))); } catch { /* private mode */ }
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    inputRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open ]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, waiting, open]);

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || waiting) return;
    const next = [...messages, { role: 'user', content }];
    setMessages(next);
    setInput('');
    setWaiting(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(-16) }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.reply) throw new Error(data.error || 'failed');
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: t.chatbot.error }]);
    } finally {
      setWaiting(false);
    }
  };

  return (
    <>
      <div className={`chatbot-panel${open ? ' open' : ''}`} role="dialog" aria-label={t.chatbot.title} aria-hidden={!open}>
        <div className="chatbot-head">
          <span className="chatbot-tile" aria-hidden="true"><ChatIcon /></span>
          <div className="chatbot-head-text">
            <strong>{t.chatbot.title}</strong>
            <span>{t.chatbot.subtitle}</span>
          </div>
          <button ref={closeRef} type="button" className="chatbot-close" onClick={() => setOpen(false)} aria-label={t.chatbot.close} tabIndex={open ? 0 : -1}>×</button>
        </div>
        <div className="chatbot-list" ref={listRef}>
          {messages.length === 0 && (
            <div className="chatbot-msg assistant">{t.chatbot.greeting}</div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`chatbot-msg ${m.role}`}>{m.content}</div>
          ))}
          {waiting && (
            <div className="chatbot-msg assistant typing"><span /><span /><span /></div>
          )}
        </div>
        {messages.length === 0 && (
          <div className="chatbot-chips">
            {t.chatbot.chips.map((c) => (
              <button key={c} type="button" onClick={() => send(c)} disabled={waiting}>{c}</button>
            ))}
          </div>
        )}
        <form
          className="chatbot-form"
          onSubmit={(e) => { e.preventDefault(); send(); }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.chatbot.placeholder}
            maxLength={1000}
            disabled={waiting}
            aria-label={t.chatbot.placeholder}
          />
          <button type="submit" aria-label={t.chatbot.send} disabled={waiting || !input.trim()}><SendIcon /></button>
        </form>
      </div>
      <button type="button" className={`chatbot-fab${open ? ' hidden' : ''}`} onClick={() => setOpen(true)} aria-label={t.chatbot.open} tabIndex={open ? -1 : 0}>
        <ChatIcon />
      </button>
    </>
  );
}
