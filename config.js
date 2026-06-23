// ============================================================
//  XZVB DEPLOYMENT — FILE KONFIGURASI
//  Edit file ini untuk ubah semua pengaturan website
// ============================================================

const CONFIG = {

  // ──────────────────────────────────────────
  //  IDENTITAS WEBSITE
  // ──────────────────────────────────────────
  site: {
    name:        "Xzvb Deployment",          // Nama web (tampil di navbar & judul)
    tagline:     "Platform Deploy Premium Indonesia", // Tagline di hero badge
    description: "Deploy website HTML & ZIP ke Vercel atau Netlify. Domain custom, SSL gratis, deploy cepat.",
    footer:      "© 2025 Xzvb Deploy · Premium Indonesia Platform",
    favicon:     "⬡",                        // Emoji atau path ke favicon
  },

  // ──────────────────────────────────────────
  //  KONTAK WHATSAPP ADMIN
  // ──────────────────────────────────────────
  whatsapp: [
    {
      name:    "Admin Xzvb",
      number:  "6281234567890",              // Format: 62xxx (tanpa + atau spasi)
      label:   "Deploy Support",
      pesan:   "Halo Admin Xzvb, saya mau tanya soal deploy",
    },
    {
      name:    "CS Support",
      number:  "6289876543210",
      label:   "Customer Service",
      pesan:   "Halo CS Xzvb, saya butuh bantuan",
    },
  ],

  // ──────────────────────────────────────────
  //  SALURAN WHATSAPP (CHANNEL)
  // ──────────────────────────────────────────
  channel: {
    name:  "Saluran Xzvb Deploy",
    sub:   "Update terbaru & info deploy",
    url:   "https://whatsapp.com/channel/0029VaXZVBChannelXzvb", // Ganti link saluran kamu
  },

  // ──────────────────────────────────────────
  //  PROVIDER DEPLOY
  // ──────────────────────────────────────────
  providers: {
    vercel: {
      enabled:    true,
      label:      "▲ Vercel",
      suffix:     "vercel.app",
      token:      "vcp_8OGbOQ8slLV8Ig81nm9ISwdo6s2bDa6TZih2mcY11nj65ncgjp12gN4j",                        // Vercel API Token (isi jika pakai real API)
      // Cara dapat token: vercel.com/account/tokens
    },
    netlify: {
      enabled:    true,
      label:      "◈ Netlify",
      suffix:     "netlify.app",
      token:      "",                        // Netlify Personal Access Token
      // Cara dapat token: app.netlify.com/user/applications/personal
    },
  },

  // ──────────────────────────────────────────
  //  BANNER SLIDER
  //  Isi 1 item = tidak geser
  //  Isi 2+ item = otomatis geser
  // ──────────────────────────────────────────
  banners: [
    {
      eyebrow: "✦ Premium Deployment Service",
      title:   "Deploy ke <span>Vercel</span> & Netlify<br>Dalam Hitungan Detik",
      sub:     "Upload HTML atau ZIP — langsung live",
    },
    {
      eyebrow: "✦ Custom Domain Gratis",
      title:   "Domain <span>Custom</span><br>Untuk Proyekmu",
      sub:     "ipungg.vercel.app · namaProject.netlify.app",
    },
    // Tambah banner baru di sini:
    // {
    //   eyebrow: "✦ Judul Eyebrow",
    //   title:   "Judul Banner",
    //   sub:     "Subjudul banner",
    // },
  ],
  bannerInterval: 3500,                      // Jeda geser banner (millisecond)

  // ──────────────────────────────────────────
  //  STATISTIK HERO
  // ──────────────────────────────────────────
  stats: [
    { num: "2K+",   label: "Ter-deploy"   },
    { num: "99.9%", label: "Uptime"       },
    { num: "<5s",   label: "Deploy Time"  },
  ],

  // ──────────────────────────────────────────
  //  MUSIK BACKGROUND
  // ──────────────────────────────────────────
  music: {
    src:    "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
    volume: 0.3,                             // 0.0 – 1.0
    loop:   true,
  },

};
