// =====================================================
//   XZVB DEPLOY — FILE KONFIGURASI
//   Edit file ini sesuai kebutuhan kamu
//   Taruh 1 folder bareng index.html
// =====================================================

const CONFIG = {

  // ===== INFO SITE =====
  site: {
    name: "Xzvb Deploy",
    favicon: "⬡",
    tagline: "Premium Deployment Service",
    description: "Deploy website kamu ke Vercel & Netlify dalam hitungan detik. Mudah, cepat, dan gratis.",
    footer: "Premium Deployment Service • Deploy sekali, hidup tenang",
  },

  // ===== STATS (angka di bawah hero) =====
  stats: [
    { num: "1.2K+", label: "Website Deployed" },
    { num: "99%",   label: "Uptime" },
    { num: "< 1m",  label: "Deploy Time" },
  ],

  // ===== WHATSAPP ADMIN =====
  whatsapp: [
    {
      name: "Admin Xzvb",
      number: "6285198959920",       // ← ganti nomor WA admin
      pesan: "Halo Admin Xzvb, mau tanya soal deploy",
    },
    {
      name: "CS Support",
      number: "6282125774233",       // ← ganti nomor WA CS
      pesan: "Halo CS Xzvb, butuh bantuan",
    },
  ],

  // ===== SALURAN WHATSAPP =====
  channel: {
    name: "Saluran Xzvb Deploy",
    url:  "https://whatsapp.com/channel/GANTI_LINK_SALURAN_KAMU",  // ← ganti
    sub:  "Update terbaru & info deploy",
  },

  // ===== BANNER SLIDER =====
  banners: [
    {
      eyebrow: "✦ Premium Deployment Service",
      title:   "Deploy ke <span>Vercel & Netlify</span>",
      sub:     "Upload file → pilih platform → deploy otomatis dalam detik",
    },
    {
      eyebrow: "🚀 Fast & Reliable",
      title:   "Website Kamu <span>Online Sekarang</span>",
      sub:     "Proses deploy cepat, stabil, dan gratis untuk semua orang",
    },
  ],
  bannerInterval: 5000,

  // ===== PROVIDERS + API KEY =====
  providers: {
    netlify: {
      label:   "Netlify",
      suffix:  "netlify.app",
      enabled: true,
      apiKey:  "",   // ← paste Netlify Personal Access Token kamu di sini
                     //   dapatkan di: https://app.netlify.com/user/applications
    },
    vercel: {
      label:   "Vercel",
      suffix:  "vercel.app",
      enabled: true,
      apiKey:  "vcp_2YfbJ579eDh6xpq0h54ZQ7XefdRP6MrtIpWDjEQoeSGU6I9Hbl008m6D",   // ← paste Vercel API Token kamu di sini
                     //   dapatkan di: https://vercel.com/account/tokens
    },
  },

  // ===== MUSIC =====
  music: {
    src:    "https://n.uguu.se/vKnngZNo.mp3",      // ← URL file mp3, kosongkan jika tidak mau musik
    loop:   true,
    volume: 0.4,
  },

};
