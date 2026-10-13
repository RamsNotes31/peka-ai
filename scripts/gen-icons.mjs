// Merender tanda Peka (kotak kuning + crosshair) ke PNG, ICO, dan gambar Open Graph.
// Tanpa dependensi: rasterisasi manual, PNG dienkode dengan zlib bawaan Node.
// Jalankan: node scripts/gen-icons.mjs

import { writeFileSync, mkdirSync } from 'node:fs';
import { deflateSync } from 'node:zlib';

const YELLOW = [255, 214, 10];
const INK = [17, 17, 17];
const PAPER = [243, 243, 240];
const OUT = 'public';

// Bentuk tanda dalam ruang 32x32, sama dengan public/favicon.svg.
function markColor(x, y) {
  const cx = 16, cy = 16;
  // Kotak dengan sudut radius 6.
  const r = 6;
  const inX = x >= 0 && x <= 32, inY = y >= 0 && y <= 32;
  if (!inX || !inY) return null;
  const qx = Math.max(r - x, 0, x - (32 - r));
  const qy = Math.max(r - y, 0, y - (32 - r));
  if (qx * qx + qy * qy > r * r) return null;

  const dx = x - cx, dy = y - cy;
  const d = Math.sqrt(dx * dx + dy * dy);
  if (d <= 2.2) return INK;                                   // titik tengah
  if (d >= 6 && d <= 8) return INK;                           // cincin, stroke 2
  const vert = Math.abs(dx) <= 1 && ((y >= 3 && y <= 9) || (y >= 23 && y <= 29));
  const horz = Math.abs(dy) <= 1 && ((x >= 3 && x <= 9) || (x >= 23 && x <= 29));
  if (vert || horz) return INK;                               // empat garis crosshair
  return YELLOW;
}

// Render RGBA. mark: { size, x, y } posisi tanda dalam piksel. bg: null = transparan.
function render(width, height, mark, bg) {
  const buf = Buffer.alloc(width * height * 4);
  const ss = 4; // supersampling 4x4
  for (let py = 0; py < height; py++) {
    for (let px = 0; px < width; px++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < ss; sy++) {
        for (let sx = 0; sx < ss; sx++) {
          const fx = px + (sx + 0.5) / ss, fy = py + (sy + 0.5) / ss;
          const mx = ((fx - mark.x) / mark.size) * 32, my = ((fy - mark.y) / mark.size) * 32;
          const c = markColor(mx, my) || bg;
          if (c) { r += c[0]; g += c[1]; b += c[2]; a += 255; }
        }
      }
      const n = ss * ss;
      const i = (py * width + px) * 4;
      if (a === 0) continue;
      const cov = a / (255 * n);
      buf[i] = Math.round(r / (a / 255));
      buf[i + 1] = Math.round(g / (a / 255));
      buf[i + 2] = Math.round(b / (a / 255));
      buf[i + 3] = Math.round(cov * 255);
    }
  }
  return buf;
}

// PNG encoder minimal.
const CRC_TABLE = new Int32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c;
});
function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}
function png(width, height, rgba) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (width * 4 + 1)] = 0; // filter None
    rgba.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// ICO yang membungkus satu PNG (didukung Windows Vista ke atas dan semua browser modern).
function ico(size, pngBuf) {
  const header = Buffer.from([0, 0, 1, 0, 1, 0]);
  const entry = Buffer.alloc(16);
  entry[0] = size === 256 ? 0 : size; entry[1] = size === 256 ? 0 : size;
  entry[2] = 0; entry[3] = 0;
  entry.writeUInt16LE(1, 4); entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuf.length, 8); entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, pngBuf]);
}

function icon(size) {
  return png(size, size, render(size, size, { size, x: 0, y: 0 }, null));
}

mkdirSync(OUT, { recursive: true });

const files = {
  'favicon-48.png': icon(48),
  'favicon-96.png': icon(96),
  'apple-touch-icon.png': icon(180),
  'icon-192.png': icon(192),
  'icon-512.png': icon(512),
};
files['favicon.ico'] = ico(48, files['favicon-48.png']);

// Open Graph 1200x630: kertas, tanda di tengah.
const ogMark = 300;
files['og.png'] = png(1200, 630, render(1200, 630, { size: ogMark, x: (1200 - ogMark) / 2, y: (630 - ogMark) / 2 }, PAPER));

for (const [name, buf] of Object.entries(files)) {
  writeFileSync(`${OUT}/${name}`, buf);
  console.log(`${name}  ${buf.length} bytes`);
}
