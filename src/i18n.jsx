import { createContext, useContext, useEffect, useState } from 'react';

const KEY = 'peka-lang';

export const STRINGS = {
  en: {
    nav: { products: 'Products', demo: 'Demo', why: 'Why Peka', access: 'Early access', meta: ['V0.1', 'Pre-release'], menuOpen: 'Open menu', menuClose: 'Close menu', skip: 'Skip to content', lang: 'Language' },
    hero: {
      eyebrow: 'peka.ai.id / pre-release',
      h1a: 'Finally, AI that gets how ',
      h1mark: 'Indonesia',
      h1b: ' talks.',
      lead: "We're building a few small AI tools for everyday Indonesia: the slang, the apps people actually use, the way things really work here. First up, reading what customers feel. More on the way.",
      cta: 'Get early access',
      link: "See what's coming",
      spec: [['Focus', 'Everyday Indonesia'], ['First tool', 'Sentiment reading'], ['Access', 'One account, one API'], ['Status', 'Private beta']],
    },
    board: {
      title: 'First tool: sentiment reading',
      note: 'sample view, not live data',
      primitive: 'Primitive',
      output: 'Output',
      c1: { name: 'Sentiment', kind: 'Sentiment', inLabel: 'Incoming text', gloss: '"service was so slow, disappointed"', out: 'negative · 0.87', conf: 'Confidence' },
      c2: { name: 'Triggers', kind: 'Trigger words', inLabel: 'Incoming text', gloss: '"support replied fast, refund done in 10 min"', out: '3 phrases · leaning positive' },
      c3: { name: 'Sources', kindLabel: 'Channels', inLabel: 'Watching', inText: 'One stream, every channel', out: '1 JSON schema' },
      c4: { name: 'Trend', kindLabel: 'Range', kind: '7 days', inLabel: 'Daily score', inText: 'Average sentiment per day', alert: 'Alert', out: 'Day 5 fell 33 points' },
    },
    feed: {
      title: 'Incoming signals',
      note: 'sample, not live data',
      labels: { pos: 'positive', neu: 'neutral', neg: 'negative' },
      gloss: [
        'finally got to see them live, it went off!',
        'box came in dented, unboxing was a total fail',
        'fast shipping, item as described',
        'parking is a pain, but the food is great',
        "disappointed, can't reach support since yesterday",
        'the new feature really helps with work',
      ],
    },
    products: {
      eyebrow: "What's coming",
      h2: 'A few more tools are in the works.',
      lead: "We'll show each one when it's ready to try. Early-access folks get in first, no queue.",
      comingSoon: 'Coming soon',
      beta: 'Private beta',
      tryDemo: 'Try the demo',
      rows: [
        { name: 'Sentiment reading', tag: 'Language · Social', body: 'Scores, daily trends, and trigger words for Indonesian text from X, TikTok, Instagram, marketplace reviews, and Google Maps.', demo: true, open: true },
        { tag: 'Brand · Public issues', body: 'Keeps an eye on a brand, product, or topic around the clock. Pings you when sentiment drops or chatter spikes.' },
        { tag: 'Directory · Reviews', body: 'A hand-tested directory of AI tools for people in Indonesia. Plain-spoken: what works, what doesn’t, what it costs in rupiah.' },
        { tag: 'Developers · SDK', body: 'Everything above through one endpoint. Send text, get back scores, entities, summaries. SDKs for JS and Python.' },
      ],
      next: { name: 'Your idea?', tag: 'Open', body: "Tell us what's annoying you day to day. The next tool might be that.", status: 'Open' },
    },
    demo: {
      eyebrow: 'Try it',
      h2: 'See how it reads slang.',
      lead: 'Pick a sample, hit analyze. Watch messy Indonesian (abbreviations, mixed language, all of it) turn into a score.',
      inLabel: 'Incoming text (Indonesian, as the model sees it)',
      sources: ['Marketplace review', 'X (Twitter)', 'TikTok comment'],
      gloss: [
        'Wow, their support replied crazy fast, refund sorted in 10 minutes. Recommended!',
        "Package hasn't moved in a week, can't reach anyone. Really let down by this courier.",
        "Tried the feature yesterday, fine so far. I'll update after a week of use.",
      ],
      glossLabel: 'In English',
      button: 'Analyze',
      output: 'Output',
      waiting: 'waiting',
      sample: 'sample · not live data',
      empty: 'Nothing yet. Pick a sample on the left and hit ',
      emptyBtn: 'Analyze',
      loading: 'Reading...',
      sentiment: 'Sentiment',
      verdicts: { positif: 'positive', negatif: 'negative', netral: 'neutral' },
      bars: ['Positive', 'Neutral', 'Negative'],
      keys: 'Trigger words',
      note: 'Demo uses sample data. The real model is trained on Indonesian text.',
    },
    why: {
      eyebrow: 'Why Peka',
      h2: 'Made for how people here actually talk.',
      items: [
        ['Gets the slang', 'From "wkwk" to "kecewa berat". Trained on real Indonesian posts, not translated ones.'],
        ['Watches the apps people use', 'X, TikTok, Instagram, Tokopedia, Shopee, Google Maps. Not just the ones that are big overseas.'],
        ['One login for everything', 'One account, one API key, one bill in rupiah. New tools show up without signing up again.'],
      ],
    },
    access: {
      eyebrow: 'Early access',
      h2: 'Want in early?',
      lead: "One email when something's ready to try. No newsletter, no nagging.",
      label: 'Work email',
      placeholder: 'you@company.com',
      button: 'Count me in',
      sending: 'Sending',
      ok: "You're on the list. We'll email you when the first tool opens.",
      invalid: "That email doesn't look right.",
      error: "Didn't go through. Try again in a bit.",
    },
    footer: { made: 'Made in Indonesia' },
  },

  id: {
    nav: { products: 'Produk', demo: 'Demo', why: 'Kenapa Peka', access: 'Akses awal', meta: ['V0.1', 'Pra-rilis'], menuOpen: 'Buka menu', menuClose: 'Tutup menu', skip: 'Lewati ke konten', lang: 'Bahasa' },
    hero: {
      eyebrow: 'peka.ai.id / pra-rilis',
      h1a: 'Akhirnya, AI yang ngerti cara orang ',
      h1mark: 'Indonesia',
      h1b: ' ngomong.',
      lead: 'Kami lagi bikin beberapa alat AI kecil buat keseharian di Indonesia: bahasanya, aplikasi yang beneran dipakai, dan cara kerja di sini. Yang pertama, membaca perasaan pelanggan. Lainnya menyusul.',
      cta: 'Minta akses awal',
      link: 'Lihat yang akan datang',
      spec: [['Fokus', 'Keseharian Indonesia'], ['Alat pertama', 'Baca sentimen'], ['Akses', 'Satu akun, satu API'], ['Status', 'Beta tertutup']],
    },
    board: {
      title: 'Alat pertama: baca sentimen',
      note: 'contoh tampilan, bukan data live',
      primitive: 'Primitif',
      output: 'Output',
      c1: { name: 'Sentimen', kind: 'Sentimen', inLabel: 'Teks masuk', gloss: null, out: 'negatif · 0.87', conf: 'Keyakinan' },
      c2: { name: 'Pemicu', kind: 'Kata pemicu', inLabel: 'Teks masuk', gloss: null, out: '3 frasa · arah positif' },
      c3: { name: 'Sumber', kindLabel: 'Kanal', inLabel: 'Dipantau', inText: 'Satu stream, semua kanal', out: '1 skema JSON' },
      c4: { name: 'Tren', kindLabel: 'Rentang', kind: '7 hari', inLabel: 'Skor harian', inText: 'Rata-rata sentimen per hari', alert: 'Alert', out: 'H5 turun 33 poin' },
    },
    feed: { title: 'Sinyal masuk', note: 'contoh, bukan data live', labels: { pos: 'positif', neu: 'netral', neg: 'negatif' }, gloss: null },
    products: {
      eyebrow: 'Yang akan datang',
      h2: 'Beberapa alat lagi sedang dikerjakan.',
      lead: 'Tiap alat kami tunjukkan saat sudah bisa dicoba. Pendaftar akses awal masuk duluan, tanpa antre.',
      comingSoon: 'Segera hadir',
      beta: 'Beta tertutup',
      tryDemo: 'Coba demonya',
      rows: [
        { name: 'Baca sentimen', tag: 'Bahasa · Sosial', body: 'Skor, tren harian, dan kata pemicu untuk teks Indonesia dari X, TikTok, Instagram, ulasan marketplace, dan Google Maps.', demo: true, open: true },
        { tag: 'Brand · Isu publik', body: 'Mengawasi brand, produk, atau topik sepanjang hari. Ngasih tahu kalau sentimen turun atau obrolan tiba-tiba ramai.' },
        { tag: 'Direktori · Review', body: 'Direktori alat AI yang dicoba langsung untuk orang Indonesia. Bahasanya lugas: mana yang jalan, mana yang nggak, berapa harganya dalam rupiah.' },
        { tag: 'Developer · SDK', body: 'Semua yang di atas lewat satu endpoint. Kirim teks, terima skor, entitas, ringkasan. SDK untuk JS dan Python.' },
      ],
      next: { name: 'Ide kamu?', tag: 'Terbuka', body: 'Ceritakan apa yang bikin repot sehari-hari. Alat berikutnya bisa jadi itu.', status: 'Terbuka' },
    },
    demo: {
      eyebrow: 'Coba sendiri',
      h2: 'Lihat cara dia baca bahasa gaul.',
      lead: 'Pilih satu contoh, tekan analisis. Teks Indonesia yang berantakan (singkatan, campur bahasa, semuanya) berubah jadi skor.',
      inLabel: 'Teks masuk',
      sources: ['Ulasan marketplace', 'X (Twitter)', 'Komentar TikTok'],
      gloss: null,
      glossLabel: '',
      button: 'Analisis',
      output: 'Output',
      waiting: 'menunggu',
      sample: 'contoh · bukan data live',
      empty: 'Belum ada hasil. Pilih contoh di kiri, lalu tekan ',
      emptyBtn: 'Analisis',
      loading: 'Membaca...',
      sentiment: 'Sentimen',
      verdicts: { positif: 'positif', negatif: 'negatif', netral: 'netral' },
      bars: ['Positif', 'Netral', 'Negatif'],
      keys: 'Kata pemicu',
      note: 'Demo pakai data contoh. Model aslinya dilatih dengan teks Indonesia.',
    },
    why: {
      eyebrow: 'Kenapa Peka',
      h2: 'Dibuat untuk cara orang di sini beneran ngomong.',
      items: [
        ['Ngerti bahasa gaul', 'Dari "wkwk" sampai "kecewa berat". Dilatih dari postingan Indonesia asli, bukan terjemahan.'],
        ['Mengawasi aplikasi yang dipakai orang', 'X, TikTok, Instagram, Tokopedia, Shopee, Google Maps. Bukan cuma yang besar di luar negeri.'],
        ['Satu login untuk semua', 'Satu akun, satu API key, satu tagihan dalam rupiah. Alat baru langsung muncul tanpa daftar ulang.'],
      ],
    },
    access: {
      eyebrow: 'Akses awal',
      h2: 'Mau masuk duluan?',
      lead: 'Satu email saat ada yang siap dicoba. Tanpa newsletter, tanpa spam.',
      label: 'Email kerja',
      placeholder: 'kamu@perusahaan.id',
      button: 'Daftarin saya',
      sending: 'Mengirim',
      ok: 'Kamu sudah masuk daftar. Kami email saat alat pertama dibuka.',
      invalid: 'Emailnya kayaknya belum benar.',
      error: 'Belum terkirim. Coba lagi sebentar.',
    },
    footer: { made: 'Dibuat di Indonesia' },
  },
};

const LangContext = createContext({ lang: 'en', setLang: () => {}, t: STRINGS.en });

// English is the default for everyone. Indonesian only when the visitor picks it.
function readInitial() {
  const saved = localStorage.getItem(KEY);
  return saved === 'id' ? 'id' : 'en';
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(readInitial);
  useEffect(() => {
    localStorage.setItem(KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang, t: STRINGS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
