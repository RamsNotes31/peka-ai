import { useState } from 'react';
import { Eyebrow } from './Hero.jsx';
import { useLang, LINKS } from '../i18n.jsx';
import { Lens } from './Stickers.jsx';
import { WOWO_LABELS, WOWO_SENTENCES, WOWO_SPEECH } from '../data.js';

// Sentence explorer for one real Kata Wowo analysis. Filter by label, jump to the second in the video.
export default function Demo() {
  const { t, lang } = useLang();
  const d = t.demo;
  const [filter, setFilter] = useState('all');

  const rows = filter === 'all' ? WOWO_SENTENCES : WOWO_SENTENCES.filter((s) => s.label === filter);
  const count = (label) => WOWO_SENTENCES.filter((s) => s.label === label).length;

  return (
    <section className="frame section" id="demo" aria-labelledby="demo-title">
      <div className="section-head">
        <Eyebrow>{d.eyebrow}</Eyebrow>
        <h2 id="demo-title">{d.h2}</h2>
        <p className="muted">{d.lead}</p>
      </div>

      <div className="demo">
        <div className="demo-input">
          <p className="mono label">{d.speechLabel}</p>
          <p className="speech-title">{WOWO_SPEECH.title}</p>
          <p className="mono muted">{WOWO_SPEECH.date} · {WOWO_SPEECH.duration} · {WOWO_SPEECH.sentences} {d.sentences}</p>

          <dl className="mono spec-list score-list">
            <div><dt>{d.score.promiseShare}</dt><dd>{WOWO_SPEECH.promiseShare}</dd></div>
            <div><dt>{d.score.concrete}</dt><dd>{WOWO_SPEECH.concretePromises}</dd></div>
            <div><dt>{d.score.contradictions}</dt><dd>{WOWO_SPEECH.contradictions}</dd></div>
          </dl>

          <p className="mono label" id="filter-label">{d.filterLabel}</p>
          <div className="chips" role="group" aria-labelledby="filter-label">
            <button type="button" className={`chip mono${filter === 'all' ? ' on' : ''}`} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
              {d.all} <span className="muted">{WOWO_SENTENCES.length}</span>
            </button>
            {WOWO_LABELS.map((l) => (
              <button key={l} type="button" className={`chip mono${filter === l ? ' on' : ''}${l === 'Janji' ? ' key' : ''}`} aria-pressed={filter === l} onClick={() => setFilter(l)}>
                {d.labels[l]} <span className="muted">{count(l)}</span>
              </button>
            ))}
          </div>

          <a className="btn" href={`${LINKS.wowo}/pidato/${WOWO_SPEECH.id}`} target="_blank" rel="noopener">
            {d.openFull} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="demo-output" aria-live="polite">
          <Lens className="sticker-demo" />
          <div className="demo-output-head">
            <span className="mono pill">{d.output}</span>
            <span className="mono muted">{rows.length} {d.of} {WOWO_SENTENCES.length}</span>
          </div>

          {rows.length === 0 ? (
            <div className="state state-empty"><p>{d.empty}</p></div>
          ) : (
            <ol className="sentences">
              {rows.map((s) => (
                <li key={s.sec}>
                  <a className="mono stamp" href={`https://www.youtube.com/watch?v=${WOWO_SPEECH.id}&t=${s.sec}s`} target="_blank" rel="noopener" aria-label={`${d.jump} ${s.t}`}>
                    {s.t}
                  </a>
                  <span className="sentence">
                    {s.txt}
                    {lang === 'en' && <span className="gloss">{s.en}</span>}
                  </span>
                  <span className={`mono pill${s.label === 'Janji' ? ' alert' : ''}`}>{d.labels[s.label]}</span>
                </li>
              ))}
            </ol>
          )}

          <p className="mono muted note">{d.note}</p>
        </div>
      </div>
    </section>
  );
}
