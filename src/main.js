import './style.css';
import {
  createIcons, Heart, MailOpen, ChevronsDown, Quote, CalendarPlus,
  Gift, X, Disc3, HeartHandshake, Wine, CalendarHeart, Calendar, Clock, MapPin,
  Navigation, CreditCard, Copy, AtSign
} from 'lucide';

/* =========================================================
   KONFIGURASI — cukup edit bagian ini
   ========================================================= */
// Foto contoh dari picsum.photos (acak).
// Ganti dengan foto kalian di folder public/img, dirujuk dari root: '/img/cover.jpg'
const demo = (seed, w = 800, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
// Foto contoh bertema pernikahan dari Wikimedia Commons (lisensi bebas), hanya untuk pratinjau.
const wiki = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=960`;

const CONFIG = {
  groom: {
    nickname: 'Dzaki',
    fullName: 'Muhammad Dzaki Alif Hidayat',
    parents: 'Putra pertama dari Bapak Nandar Hidayat & Ibu Arliana',
    instagram: '',
    photo: wiki('A_groom_with_boutonniere_(Unsplash).jpg')
  },
  bride: {
    nickname: 'Selly',
    fullName: 'Selly Septi Yani',
    parents: 'Putri kedua dari Bapak Sakri & Ibu Santi',
    instagram: '',
    photo: wiki('Bride_holding_a_bouquet_of_pink_roses_with_greenery_at_a_wedding_venue_decorated_for_the_celebration.jpg')
  },
  weddingDate: '2026-11-13T08:00:00+07:00',

  photos: {
    cover: wiki('Wedding_couple_at_beach_bride_groom_bouquet_flowers_dress_gift_(29599967451).jpg'),
    hero: wiki('Wedding_Decoration_in_Anambra_state,_Nigeria.jpg'),
    footer: wiki('Our_rings!.jpg')
  },

  quote: '“Dan diantara tanda-tanda kekuasaanNya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikanNya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.”',
  quoteSource: 'QS. Ar. Ruum (30):21',

  story: [
    { title: 'Awal Kisah', text: 'Tak ada yang menyangka bahwa sebuah pertemuan singkat akan menjadi awal dari segalanya. Di antara miliaran kemungkinan, semesta memilih untuk mempertemukan kami dalam satu waktu yang tak terduga, memulai cerita yang telah Tuhan gariskan.' },
    { title: 'Saling Mendewasakan', text: 'Perjalanan kami bukan hanya tentang kebahagiaan, tapi tentang proses saling mendewasakan. Kami belajar menyatukan perbedaan, membangun fondasi kepercayaan, dan meyakini bahwa setiap tantangan adalah cara kami untuk semakin kokoh sebagai satu kesatuan.' },
    { title: 'Janji Setia', text: 'Di titik ini, kami memilih untuk berhenti mencari. Momen lamaran menjadi bukti nyata dari kesungguhan hati-sebuah pernyataan bahwa kami siap melangkah lebih jauh. Kami memilih untuk saling menjaga, mulai dari detik ini hingga selamanya.' }
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

  gallery: [
    wiki('Couple_holds_hands_showing_wedding_rings_in_a_warm_setting_during_a_celebration.jpg'),
    wiki('Bride_with_bouquet.jpg'),
    wiki('Wedding-Flowers.jpg'),
    wiki('White-wedding-dress.jpg'),
    wiki('Wedding_rings_2.jpg'),
    wiki('Couple_holding_sign_that_says_love_during_wedding_reception_in_a_decorated_venue.jpg'),
    wiki('Reception_table_setting.jpg'),
    wiki("Groom's_Boutonniere_(Unsplash).jpg"),
    wiki('Wearing_of_engagement_ring.JPG'),
    wiki('Chicago_Riverwalk_Bride_Portrait.jpg'),
    wiki('Wedding_reception_stage,_decorations,_Kochi.jpg'),
    wiki('Beach_Bliss_(3205542692).jpg')
  ],

  accounts: [
    { bank: 'Bank Mandiri', number: '1330025231812', name: 'Muhammad Dzaki Alif' },
    { bank: 'Bank BCA', number: '5737115858', name: 'Selly Septi Yani' },
  ],

  music: ''   // contoh: '/music/lagu.mp3' (file di public/music)
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
function personHTML(p) {
  const ig = p.instagram
    ? `<a href="https://instagram.com/${encodeURIComponent(p.instagram)}" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-1.5 text-sm text-maroon md:text-base hover:underline"><i data-lucide="at-sign" class="h-4 w-4"></i>@${esc(p.instagram)}</a>`
    : '';
  return `
    <div class="group relative mx-auto w-52 md:w-56 lg:w-64">
      <div class="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full border border-maroon"></div>
      <div class="relative aspect-[3/4] overflow-hidden rounded-t-full bg-ink/10">
        <img src="${esc(p.photo)}" alt="${esc(p.fullName)}" loading="lazy" class="h-full w-full object-cover photo-bw">
      </div>
    </div>
    <p class="mt-10 font-script text-5xl text-maroon lg:text-6xl">${esc(p.nickname)}</p>
    <p class="mt-2 font-serif text-2xl font-medium lg:text-3xl">${esc(p.fullName)}</p>
    <p class="mt-2 text-sm text-ink/60 md:text-base">${esc(p.parents)}</p>
    ${ig}`;
}
$('#groom').innerHTML = personHTML(CONFIG.groom);
$('#bride').innerHTML = personHTML(CONFIG.bride);

// Love story
$('#story').innerHTML = CONFIG.story.map((s) => `
  <li class="reveal relative mb-12 last:mb-0">
    <span class="absolute -left-[41px] top-2 flex h-5 w-5 items-center justify-center rounded-full bg-ivory ring-1 ring-maroon">
      <span class="h-2 w-2 rounded-full bg-maroon"></span>
    </span>
    <p class="font-serif text-2xl font-medium md:text-3xl">${esc(s.title)}</p>
    <p class="mt-2 text-[15px] leading-relaxed text-ink/70 md:text-base lg:text-lg">${esc(s.text)}</p>
  </li>`).join('');

// Acara
$('#events').innerHTML = CONFIG.events.map((ev) => `
  <div class="reveal relative overflow-hidden rounded-3xl bg-ivory px-6 py-10 text-center shadow-xs ring-1 ring-ink/5">
    <svg class="absolute -right-6 -top-6 h-24 w-24 rotate-180 text-ink/20"><use href="#floral"/></svg>
    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ivory">
      <i data-lucide="${esc(ev.icon || 'calendar-heart')}" class="h-6 w-6"></i>
    </div>
    <p class="mt-5 font-script text-4xl text-maroon md:text-5xl">${esc(ev.title)}</p>
    <div class="mx-auto mt-6 max-w-xs space-y-3 text-left text-[15px] md:text-base lg:max-w-sm lg:text-lg">
      <p class="flex items-start gap-3"><i data-lucide="calendar" class="mt-0.5 h-4 w-4 shrink-0 text-maroon"></i>${esc(ev.date)}</p>
      <p class="flex items-start gap-3"><i data-lucide="clock" class="mt-0.5 h-4 w-4 shrink-0 text-maroon"></i>${esc(ev.time)}</p>
      <p class="flex items-start gap-3"><i data-lucide="map-pin" class="mt-0.5 h-4 w-4 shrink-0 text-maroon"></i>
        <span><span class="font-medium">${esc(ev.place)}</span><br><span class="text-ink/60">${esc(ev.address)}</span></span></p>
    </div>
    ${ev.mapsLink ? `<a href="${esc(ev.mapsLink)}" target="_blank" rel="noopener" class="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-xs uppercase tracking-[.25em] text-ivory lg:text-sm transition hover:bg-maroon"><i data-lucide="navigation" class="h-4 w-4"></i> Petunjuk Arah</a>` : ''}
  </div>`).join('');
$('#mapFrame').src = 'https://www.google.com/maps?q=' + encodeURIComponent(CONFIG.mapQuery) + '&output=embed';

// Galeri + lightbox
$('#gallery').innerHTML = CONFIG.gallery.map((src, i) => `
  <button class="group block w-full overflow-hidden rounded-2xl" data-full="${esc(src)}" aria-label="Perbesar foto ${i + 1}">
    <img src="${esc(src)}" alt="Foto ${i + 1}" loading="lazy" class="w-full photo-bw">
  </button>`).join('');
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
    <div class="relative overflow-hidden rounded-3xl bg-ink p-7 text-left text-ivory">
      <i data-lucide="credit-card" class="absolute right-6 top-6 h-6 w-6 text-maroon-soft"></i>
      <p class="text-[11px] uppercase tracking-[.3em] text-maroon-soft md:text-xs">${esc(a.bank)}</p>
      <p class="mt-6 font-serif text-3xl tracking-wider lg:text-4xl">${esc(a.number)}</p>
      <p class="mt-1 text-sm text-ivory/70 md:text-base">a.n. ${esc(a.name)}</p>
      <button class="copy-btn mt-6 inline-flex items-center gap-2 rounded-full border border-ivory/60 px-5 py-2 text-[11px] uppercase tracking-[.2em] transition md:text-xs hover:bg-ivory hover:text-ink" data-number="${esc(a.number)}">
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
if (CONFIG.music) audio.src = CONFIG.music;
const setPlaying = (on) => musicBtn.firstElementChild.classList.toggle('spin-slow', on);
musicBtn.addEventListener('click', () => {
  if (audio.paused) audio.play().then(() => setPlaying(true)).catch(() => {});
  else { audio.pause(); setPlaying(false); }
});

// Buka undangan
$('#openBtn').addEventListener('click', () => {
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
    Copy, AtSign
  }
});

// Animasi muncul saat scroll (dijalankan setelah semua elemen, termasuk yang dibuat JS, ada)
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((n) => io.observe(n));
