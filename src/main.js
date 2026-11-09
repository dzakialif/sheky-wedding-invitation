import './style.css';
import {
  createIcons, Heart, MailOpen, ChevronsDown, Quote, CalendarPlus,
  Gift, X, Disc3, HeartHandshake, Wine, CalendarHeart, Calendar, Clock, MapPin,
  Navigation, CreditCard, Copy, AtSign, Sparkle, Sparkles, Camera, Gem, Flower2,
  Star, Infinity as InfinityIcon, Feather, BookHeart, HandHeart, Hourglass, Leaf, ZoomIn
} from 'lucide';

/* =========================================================
   KONFIGURASI — cukup edit bagian ini
   ========================================================= */
// Foto ada di public/img (WebP). Ganti file dengan nama yang sama untuk memakai foto sendiri.

const CONFIG = {
  groom: {
    nickname: 'Dzaki',
    fullName: 'Muhammad Dzaki Alif Hidayat',
    parents: 'Putra pertama dari Bapak Nandar Hidayat & Ibu Arliana',
    instagram: '',
    photo: '/img/dzaki.webp'
  },
  bride: {
    nickname: 'Selly',
    fullName: 'Selly Septi Yani',
    parents: 'Putri kedua dari Bapak Sakri & Ibu Santi',
    instagram: '',
    photo: '/img/selly.webp'
  },
  weddingDate: '2026-11-13T08:00:00+07:00',

  photos: {
    cover: '/img/2.webp',          // layar landscape (desktop)
    coverPortrait: '/img/1.webp',  // layar portrait (HP)
    hero: '/img/hero.webp',
    footer: '/img/footer.webp'
  },

  quote: '“Dan diantara tanda-tanda kekuasaanNya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikanNya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”',
  quoteSource: 'QS. Ar. Rum (30):21',

  story: [
    { icon: 'sparkles', photo: '/img/16.webp', title: 'Awal Kisah', text: 'Tak ada yang menyangka bahwa sebuah pertemuan singkat akan menjadi awal dari segalanya. Di antara miliaran kemungkinan, semesta memilih untuk mempertemukan kami dalam satu waktu yang tak terduga, memulai cerita yang telah Tuhan gariskan.' },
    { icon: 'hand-heart', photo: '/img/13.webp', title: 'Saling Mendewasakan', text: 'Perjalanan kami bukan hanya tentang kebahagiaan, tapi tentang proses saling mendewasakan. Kami belajar menyatukan perbedaan, membangun fondasi kepercayaan, dan meyakini bahwa setiap tantangan adalah cara kami untuk semakin kokoh sebagai satu kesatuan.' },
    { icon: 'gem', photo: '/img/11.webp', title: 'Janji Setia', text: 'Di titik ini, kami memilih untuk berhenti mencari. Momen lamaran menjadi bukti nyata dari kesungguhan hati-sebuah pernyataan bahwa kami siap melangkah lebih jauh. Kami memilih untuk saling menjaga, mulai dari detik ini hingga selamanya.' }
  ],

  events: [
    {
      icon: 'heart-handshake',
      title: 'Akad Nikah',
      date: 'Jumat, 13 November 2026',
      time: '08.00 – 10.00 WIB',
      place: 'Kediaman mempelai wanita',
      address: 'Gang Liwet, Desa Cikarawang, Kecamatan Dramaga, Kabupaten Bogor, 16680',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=-6.543250,106.726861'
    },
    {
      icon: 'wine',
      title: 'Resepsi',
      date: 'Jumat, 13 November 2026',
      time: '11.00 – 21.00 WIB',
      place: 'Kediaman mempelai wanita',
      address: 'Gang Liwet, Desa Cikarawang, Kecamatan Dramaga, Kabupaten Bogor, 16680',
      mapsLink: 'https://www.google.com/maps/search/?api=1&query=-6.543250,106.726861'
    }
  ],
  // Koordinat lokasi: 6°32'35.7"S 106°43'36.7"E
  mapQuery: '-6.543250,106.726861',

  // Urutan disusun agar grid rapi: foto landscape (wide) mengisi 2 kolom.
  gallery: [
    { src: '/img/2.webp', wide: true }, '/img/3.webp', '/img/1.webp',
    { src: '/img/5.webp', wide: true }, '/img/8.webp', '/img/10.webp',
    '/img/7.webp', '/img/6.webp', { src: '/img/4.webp', wide: true },
    '/img/14.webp', '/img/12.webp', { src: '/img/15.webp', wide: true },
  ],

  accounts: [
    { bank: 'Bank Mandiri', number: '1330025231812', name: 'Muhammad Dzaki Alif' },
    { bank: 'Bank BCA', number: '5737115858', name: 'Selly Septi Yani' },
  ],

  // Can't Help Falling in Love (cover Kaia Kingsley) — taruh file MP3-nya di public/music dengan nama ini
  music: '/music/cant-help-falling-in-love.mp3',
  musicStart: 8   // detik mulai diputar (melewati intro); 0 = dari awal
};

/* =========================================================
   LOGIKA — tidak perlu diubah
   ========================================================= */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Nama tamu dari URL ?to=
const guest = new URLSearchParams(location.search).get('to');
if (guest) $('#guestName').textContent = guest.trim().slice(0, 60);

// Teks
const wDate = new Date(CONFIG.weddingDate);
const pad = (n) => String(n).padStart(2, '0');
document.title = `The Wedding of ${CONFIG.groom.nickname} & ${CONFIG.bride.nickname}`;
document.querySelectorAll('[data-bind="couple"]').forEach((n) => {
  n.innerHTML = `<span>${esc(CONFIG.groom.nickname)}</span> <span class="text-maroon-soft">&amp;</span> <span>${esc(CONFIG.bride.nickname)}</span>`;
});
document.querySelectorAll('[data-bind="dateShort"]').forEach((n) => {
  n.textContent = `${pad(wDate.getDate())} . ${pad(wDate.getMonth() + 1)} . ${wDate.getFullYear()}`;
});
// Contoh: "Jumat, 13 November 2026" (dihitung otomatis dari weddingDate)
const dateLong = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Jakarta'
}).format(wDate);
document.querySelectorAll('[data-bind="dateLong"]').forEach((n) => { n.textContent = dateLong; });
$('[data-bind="quote"]').textContent = CONFIG.quote;
$('[data-bind="quoteSource"]').textContent = CONFIG.quoteSource;

// Foto latar
document.querySelectorAll('img[data-src]').forEach((img) => {
  const src = CONFIG.photos[img.dataset.src];
  if (src) img.src = src; else img.remove();
});

// Mempelai (bingkai lengkung/arch)
function personHTML(p, label) {
  const ig = p.instagram
    ? `<a href="https://instagram.com/${encodeURIComponent(p.instagram)}" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-1.5 text-lg text-maroon md:text-xl hover:underline"><i data-lucide="at-sign" class="h-4 w-4"></i>@${esc(p.instagram)}</a>`
    : '';
  return `
    <div class="group relative mx-auto w-52 md:w-56 lg:w-64">
      <div class="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full border border-maroon"></div>
      <div class="relative aspect-[3/4] overflow-hidden rounded-t-full bg-ink/10">
        <img src="${esc(p.photo)}" alt="${esc(p.fullName)}" loading="lazy" class="h-full w-full object-cover photo-bw">
      </div>
      <span class="absolute -bottom-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-maroon text-ivory ring-4 ring-sand">
        <i data-lucide="heart" class="h-4 w-4 fill-current"></i>
      </span>
    </div>
    <p class="mt-12 inline-flex items-center gap-2 text-sm uppercase tracking-[.3em] text-ink/50 md:text-base">
      <i data-lucide="sparkle" class="h-3 w-3 fill-current text-maroon"></i>${esc(label)}<i data-lucide="sparkle" class="h-3 w-3 fill-current text-maroon"></i>
    </p>
    <p class="mt-2 font-script text-5xl text-maroon lg:text-6xl">${esc(p.nickname)}</p>
    <p class="mt-2 font-serif text-2xl font-medium lg:text-3xl">${esc(p.fullName)}</p>
    <p class="mt-2 text-lg text-ink/60 md:text-xl">${esc(p.parents)}</p>
    ${ig}`;
}
$('#groom').innerHTML = personHTML(CONFIG.groom, 'The Groom');
$('#bride').innerHTML = personHTML(CONFIG.bride, 'The Bride');

// Pembatas judul: <div data-divider="nama-ikon"></div>
document.querySelectorAll('[data-divider]').forEach((n) => {
  n.className += ' flex items-center justify-center gap-3 text-maroon';
  n.innerHTML = `<span class="h-px w-10 bg-maroon/40 md:w-16"></span>
    <i data-lucide="sparkle" class="h-2.5 w-2.5 fill-current opacity-60"></i>
    <i data-lucide="${esc(n.dataset.divider)}" class="h-5 w-5"></i>
    <i data-lucide="sparkle" class="h-2.5 w-2.5 fill-current opacity-60"></i>
    <span class="h-px w-10 bg-maroon/40 md:w-16"></span>`;
});

// Love story
$('#story').innerHTML = CONFIG.story.map((s, i) => {
  const flip = i % 2 === 1; // zig-zag di layar lebar
  const photo = s.photo ? `
    <div class="group relative mx-auto w-full max-w-xs md:max-w-none ${flip ? 'md:order-2' : ''}">
      <div class="absolute inset-0 ${flip ? '-translate-x-3' : 'translate-x-3'} translate-y-3 rounded-[2rem] border border-maroon/40"></div>
      <div class="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl shadow-ink/10">
        <img src="${esc(s.photo)}" alt="${esc(s.title)}" loading="lazy" class="h-full w-full object-cover photo-bw">
        <div class="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/10 to-transparent"></div>
        <div class="absolute bottom-5 left-6 text-left text-ivory">
          <p class="text-xs uppercase tracking-[.4em] text-maroon-soft md:text-sm">Chapter</p>
          <p class="font-serif text-5xl leading-none md:text-6xl">${pad(i + 1)}</p>
        </div>
      </div>
    </div>` : '';
  return `
  <li class="reveal relative md:grid md:grid-cols-2 md:items-center md:gap-20">
    <span class="relative z-10 mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-ivory shadow-lg shadow-maroon/30 ring-8 ring-ivory md:absolute md:left-1/2 md:top-1/2 md:mb-0 md:-translate-x-1/2 md:-translate-y-1/2">
      <i data-lucide="${esc(s.icon || 'heart')}" class="h-6 w-6"></i>
    </span>
    ${photo}
    <div class="relative mt-10 rounded-[2rem] bg-ivory px-7 py-9 text-center shadow-sm ring-1 ring-ink/5 md:mt-0 ${flip ? 'md:order-1 md:text-right' : 'md:text-left'}">
      <div class="frame pointer-events-none absolute inset-0 rounded-[2rem] text-maroon"></div>
      <p class="font-script text-4xl text-maroon md:text-5xl">${esc(s.title)}</p>
      <div class="mt-3 flex items-center gap-2 text-maroon justify-center ${flip ? 'md:justify-end' : 'md:justify-start'}">
        <span class="h-px w-10 bg-maroon/40"></span><i data-lucide="heart" class="h-3 w-3 fill-current"></i><span class="h-px w-10 bg-maroon/40"></span>
      </div>
      <p class="mt-4 text-lg leading-relaxed text-ink/70 md:text-xl">${esc(s.text)}</p>
    </div>
  </li>`;
}).join('');

// Acara
$('#events').innerHTML = CONFIG.events.map((ev) => `
  <div class="reveal relative overflow-hidden rounded-3xl bg-ivory px-6 py-10 text-center shadow-xs ring-1 ring-ink/5">
    <div class="frame pointer-events-none absolute inset-0 rounded-3xl text-maroon"></div>
    <svg class="absolute -right-6 -top-6 h-24 w-24 rotate-180 text-ink/20"><use href="#floral"/></svg>
    <svg class="absolute -bottom-6 -left-6 h-24 w-24 text-ink/20"><use href="#floral"/></svg>
    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ivory">
      <i data-lucide="${esc(ev.icon || 'calendar-heart')}" class="h-6 w-6"></i>
    </div>
    <p class="mt-5 font-script text-4xl text-maroon md:text-5xl">${esc(ev.title)}</p>
    <div class="mx-auto mt-6 max-w-xs space-y-3 text-left text-lg md:text-xl lg:max-w-sm">
      <p class="flex items-start gap-3"><i data-lucide="calendar" class="mt-0.5 h-4 w-4 shrink-0 text-maroon"></i>${esc(ev.date)}</p>
      <p class="flex items-start gap-3"><i data-lucide="clock" class="mt-0.5 h-4 w-4 shrink-0 text-maroon"></i>${esc(ev.time)}</p>
      <p class="flex items-start gap-3"><i data-lucide="map-pin" class="mt-0.5 h-4 w-4 shrink-0 text-maroon"></i>
        <span><span class="font-medium">${esc(ev.place)}</span><br><span class="text-ink/60">${esc(ev.address)}</span></span></p>
    </div>
    ${ev.mapsLink ? `<a href="${esc(ev.mapsLink)}" target="_blank" rel="noopener" class="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-base uppercase tracking-[.25em] text-ivory lg:text-lg transition hover:bg-maroon"><i data-lucide="navigation" class="h-4 w-4"></i> Petunjuk Arah</a>` : ''}
  </div>`).join('');
$('#mapFrame').src = 'https://www.google.com/maps?q=' + encodeURIComponent(CONFIG.mapQuery) + '&output=embed';

// Galeri + lightbox
$('#gallery').innerHTML = CONFIG.gallery.map((item, i) => {
  const { src, wide } = typeof item === 'string' ? { src: item } : item;
  return `
  <button class="group relative block w-full overflow-hidden rounded-2xl ${wide ? 'col-span-2 aspect-[3/2] md:aspect-auto' : 'aspect-[3/4]'}" data-full="${esc(src)}" aria-label="Perbesar foto ${i + 1}">
    <img src="${esc(src)}" alt="Foto ${i + 1}" loading="lazy" class="absolute inset-0 h-full w-full object-cover photo-bw">
    <span class="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-ivory/85 text-ink shadow-sm">
      <i data-lucide="zoom-in" class="h-4 w-4"></i>
    </span>
  </button>`;
}).join('');
const lb = $('#lightbox');
$('#gallery').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-full]');
  if (!btn) return;
  $('#lbImg').src = btn.dataset.full;
  lb.classList.replace('hidden', 'flex');
});
const closeLb = () => lb.classList.replace('flex', 'hidden');
$('#lbClose').addEventListener('click', closeLb);
lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb(); });

// Rekening
if (!CONFIG.accounts.length) {
  $('#giftSection').remove();
} else {
  $('#accounts').innerHTML = CONFIG.accounts.map((a) => `
    <div class="relative overflow-hidden rounded-3xl bg-ink bg-linear-to-br from-ink via-ink to-maroon-dark p-7 text-left text-ivory shadow-lg shadow-ink/20">
      <div class="frame pointer-events-none absolute inset-0 rounded-3xl text-maroon-soft"></div>
      <svg class="absolute -bottom-6 -right-6 h-28 w-28 rotate-180 text-maroon-soft/30"><use href="#floral"/></svg>
      <i data-lucide="credit-card" class="absolute right-6 top-6 h-6 w-6 text-maroon-soft"></i>
      <p class="text-sm uppercase tracking-[.3em] text-maroon-soft md:text-base">${esc(a.bank)}</p>
      <p class="mt-6 font-serif text-3xl tracking-wider lg:text-4xl">${esc(a.number)}</p>
      <p class="mt-1 text-lg text-ivory/70 md:text-xl">a.n. ${esc(a.name)}</p>
      <button class="copy-btn mt-6 inline-flex items-center gap-2 rounded-full border border-ivory/60 px-5 py-2 text-sm uppercase tracking-[.2em] transition md:text-base hover:bg-ivory hover:text-ink" data-number="${esc(a.number)}">
        <i data-lucide="copy" class="h-3.5 w-3.5"></i><span>Salin Nomor</span>
      </button>
    </div>`).join('');
  $('#accounts').addEventListener('click', async (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const label = btn.querySelector('span');
    try { await navigator.clipboard.writeText(btn.dataset.number); label.textContent = 'Tersalin ✓'; }
    catch { label.textContent = btn.dataset.number; }
    setTimeout(() => (label.textContent = 'Salin Nomor'), 2000);
  });
}

// Countdown
function tick() {
  let diff = Math.max(0, wDate - Date.now());
  const d = Math.floor(diff / 864e5); diff -= d * 864e5;
  const h = Math.floor(diff / 36e5);  diff -= h * 36e5;
  const m = Math.floor(diff / 6e4);   diff -= m * 6e4;
  $('#cdDays').textContent = d;
  $('#cdHours').textContent = pad(h);
  $('#cdMins').textContent = pad(m);
  $('#cdSecs').textContent = pad(Math.floor(diff / 1e3));
}
tick(); setInterval(tick, 1000);

// Google Calendar
(() => {
  const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const end = new Date(wDate.getTime() + 6 * 36e5);
  const ev = CONFIG.events[0];
  $('#calendarBtn').href = 'https://calendar.google.com/calendar/render?' + new URLSearchParams({
    action: 'TEMPLATE',
    text: `Pernikahan ${CONFIG.groom.nickname} & ${CONFIG.bride.nickname}`,
    dates: `${fmt(wDate)}/${fmt(end)}`,
    location: ev ? `${ev.place}, ${ev.address}` : ''
  });
})();

// Musik
const audio = $('#bgMusic');
const musicBtn = $('#musicBtn');
const musicStart = CONFIG.musicStart || 0;
// "#t=8" = media fragment: browser langsung mulai dari detik ke-8
if (CONFIG.music) audio.src = CONFIG.music + (musicStart ? `#t=${musicStart}` : '');
// Saat lagu selesai, ulangi dari detik musicStart (bukan dari 0)
audio.addEventListener('ended', () => {
  audio.currentTime = musicStart;
  audio.play().catch(() => {});
});
const setPlaying = (on) => musicBtn.firstElementChild.classList.toggle('spin-slow', on);
musicBtn.addEventListener('click', () => {
  if (audio.paused) audio.play().then(() => setPlaying(true)).catch(() => {});
  else { audio.pause(); setPlaying(false); }
});

// Buka undangan
function startPetals() {
  const box = $('#petals');
  for (let i = 0; i < 14; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    const size = 8 + Math.random() * 8;
    Object.assign(p.style, {
      left: Math.random() * 100 + '%',
      width: size + 'px', height: size * 1.2 + 'px',
      animationDuration: `${10 + Math.random() * 10}s, ${3 + Math.random() * 3}s`,
      animationDelay: `${-Math.random() * 20}s, 0s`
    });
    box.appendChild(p);
  }
}

$('#openBtn').addEventListener('click', () => {
  startPetals();
  $('#cover').classList.add('hide');
  document.body.classList.remove('locked');
  if (CONFIG.music) {
    musicBtn.classList.replace('hidden', 'flex');
    audio.play().then(() => setPlaying(true)).catch(() => {});
  }
});

// Ikon — hanya yang di-import yang ikut ter-bundle.
// Jika menambah ikon baru (mis. di CONFIG.events), tambahkan juga di import & di sini.
createIcons({
  icons: {
    Heart, MailOpen, ChevronsDown, Quote, CalendarPlus, Gift, X, Disc3,
    HeartHandshake, Wine, CalendarHeart, Calendar, Clock, MapPin, Navigation, CreditCard,
    Copy, AtSign, Sparkle, Sparkles, Camera, Gem, Flower2, Star, Infinity: InfinityIcon, Feather,
    BookHeart, HandHeart, Hourglass, Leaf, ZoomIn
  }
});

// Animasi muncul saat scroll (dijalankan setelah semua elemen, termasuk yang dibuat JS, ada)
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((n) => io.observe(n));
