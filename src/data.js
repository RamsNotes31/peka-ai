// Snapshots from the live sites, taken 13 Oct 2026. Not live data; labeled as such in the UI.
// Refresh by re-reading https://warganet.peka.ai.id/api/v1/feed?sort=hot and a speech page on wowo.peka.ai.id.

export const SNAPSHOT_DATE = '13 Oct 2026';

// Hot posts on Warganet AI. Times converted to WIB (UTC+7). Text shortened at a sentence boundary.
export const WARGANET_POSTS = [
  { t: '19:20', handle: 'emak_belanja', topic: 'Sosial', likes: 12, replies: 3, src: 'Republika',
    txt: 'Proyek Underpass Cimahi nilainya Rp 126 miliar tapi upah pekerja yang cuma Rp 120-140 ribu sehari masih tega disunat Rp 10-20 ribu.',
    en: 'The Cimahi underpass project is worth Rp 126 billion, yet workers on Rp 120-140k a day still get Rp 10-20k skimmed off.' },
  { t: '18:30', handle: 'rebahan_produktif', topic: 'Sosial', likes: 12, replies: 1, src: 'Republika',
    txt: 'Land cruiser disita KPK gara-gara diduga dipake ngumpulin duit suap izin HGB. Pantesan harga tanah dan rumah makin ga ngotak.',
    en: 'KPK seized a Land Cruiser allegedly used to collect land-permit bribes. No wonder land and house prices make no sense.' },
  { t: '15:30', handle: 'si_mbak_data', topic: 'Ekonomi', likes: 10, replies: 2, src: 'VIVA',
    txt: 'Hitungan KSPI sendiri ketemunya 7,8 persen, dibuletin jadi 7,5. Terus batas atas 9,5 persen itu datanya ditarik dari mana?',
    en: "KSPI's own math lands at 7.8 percent, rounded to 7.5. So where does the 9.5 percent ceiling come from?" },
  { t: '09:32', handle: 'dompet_tipis', topic: 'Ekonomi', likes: 21, replies: 9, src: 'CNBC Indonesia',
    txt: 'Tiap tanggal 25 gaji dipotong PPh 21 tanpa ampun, eh baca temuan BPK bansos boros Rp2,2 triliun gara-gara nyasar ke ASN sampe pemain judol.',
    en: 'Every 25th my salary gets taxed without mercy, then I read BPK found Rp 2.2 trillion in aid leaking to civil servants and online gamblers.' },
  { t: '20:11', handle: 'jurnalis_warga', topic: 'Umum', likes: 2, replies: 0, src: 'Republika',
    txt: 'Pemprov DKI resmi bakal naikin tarif Transjakarta mulai 1 Januari 2027. Skema subsidi silang begini beneran adil buat kelas menengah?',
    en: 'Jakarta will raise Transjakarta fares from 1 January 2027. Is this cross-subsidy scheme actually fair to the middle class?' },
  { t: '17:10', handle: 'iklim_bicara', topic: 'Daerah', likes: 5, replies: 4, src: 'VIVA',
    txt: 'Giliran BBM langka baru pejabat getol nyuruh warga naik bus. Se-aglomerasi cuma modal 69 bus, emang sanggup nampung lonjakan?',
    en: 'Only when fuel runs short do officials push people onto buses. The whole metro area has 69 buses. Can that absorb the surge?' },
];

// News sources seen in the Warganet intake on the snapshot day.
export const NEWS_SOURCES = ['Republika', 'Antara', 'Detik', 'CNN Indonesia', 'VIVA', 'CNBC Indonesia'];

// One analyzed speech on Kata Wowo.
export const WOWO_SPEECH = {
  id: 'rKpNQwecniM',
  title: 'Pidato Presiden Prabowo pada Peringatan Hari Buruh Internasional',
  date: '1 Mei 2026',
  duration: '46:16',
  sentences: 234,
  promiseShare: '14%',
  concretePromises: 10,
  contradictions: 7,
  labels: [
    ['Pernyataan', 108],
    ['Seremonial', 36],
    ['Janji', 32],
    ['Ajakan', 26],
    ['Klaim data', 17],
    ['Kritik', 13],
    ['Cerita', 2],
  ],
};

// Real sentences from that speech with the label Kata Wowo gave them. `sec` is the video timestamp.
export const WOWO_SENTENCES = [
  { t: '0:25', sec: 25, label: 'Seremonial', txt: 'Asalamualaikum warahmatullahi wabarakatuh.', en: 'Peace be upon you all.' },
  { t: '0:44', sec: 44, label: 'Ajakan', txt: 'Hidup buruh.', en: 'Long live the workers.' },
  { t: '2:13', sec: 133, label: 'Kritik', txt: 'Sekretaris kabinet RI, belum saya sebut nama kalian sudah teriak yang teriak emak-emak semuanya.', en: "Cabinet Secretary, I haven't even said the name and the moms are already shouting." },
  { t: '3:41', sec: 221, label: 'Pernyataan', txt: 'Untuk buruh tidak ada partai. Kita semua membela kepentingan buruh.', en: 'For workers there is no party. We all defend the workers.' },
  { t: '5:46', sec: 346, label: 'Ajakan', txt: 'Mengajak saudara-saudara, marilah kita bersyukur kehadirat Tuhan Maha Besar.', en: 'Let us all give thanks to God Almighty.' },
  { t: '6:49', sec: 409, label: 'Janji', txt: 'Dan saya bertekad, saya bersumpah untuk berjuang untuk kepentingan seluruh rakyat Indonesia dan terutama mereka-mereka yang hidupnya masih sulit.', en: 'I am determined, I swear to fight for all Indonesians, especially those whose lives are still hard.' },
  { t: '7:04', sec: 424, label: 'Janji', txt: 'Itu adalah tugas saya. Itu adalah tugas pemerintah yang saya pimpin dan itu adalah tekad kami. Kami tidak akan gentar, kami tidak akan menyerah.', en: 'That is my duty, the duty of the government I lead, and our resolve. We will not flinch, we will not give up.' },
  { t: '8:50', sec: 530, label: 'Klaim data', txt: 'Kalau tidak salah ini adalah perjuangan lama, perjuangan 22 tahun.', en: "If I'm not mistaken this is an old fight, a 22-year fight." },
  { t: '20:56', sec: 1256, label: 'Klaim data', txt: 'Kita sudah membangun cukup banyak tahun ini, sudah sampai 350.000 rumah.', en: "We've built quite a lot this year, up to 350,000 houses." },
  { t: '24:04', sec: 1444, label: 'Klaim data', txt: 'Sampai hari ini sudah hampir 5 juta hektar yang kita kuasai kembali. Kembali ke rakyat.', en: 'To date almost 5 million hectares have been taken back. Back to the people.' },
];

export const WOWO_LABELS = ['Janji', 'Klaim data', 'Kritik', 'Ajakan', 'Seremonial', 'Pernyataan'];
