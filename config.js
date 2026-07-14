/* =====================================================================
   KONFIGURASI ipunggOtp
   File ini dipisah dari index.html biar gampang diedit tanpa
   ngoprek kode utama. Wajib disimpan satu folder dengan index.html.
   ===================================================================== */

// ---- Konfigurasi Firebase (Realtime Database + Auth) ----
// Ambil dari Firebase Console > Project Settings > General > Your apps
const FIREBASE_CONFIG = {
apiKey: "AIzaSyBqIiVyX_HB9yadmIcmOksSh2UVNZYwwNM",
  authDomain: "tepung-20685.firebaseapp.com",
  databaseURL: "https://tepung-20685-default-rtdb.firebaseio.com"
  projectId: "tepung-20685",
  storageBucket: "tepung-20685.firebasestorage.app",
  messagingSenderId: "512090715534",
  appId: "1:512090715534:web:cfa65bb2ecdbaa72b4a0df",
  measurementId: "G-H1HZLYYZ4R"
};

// ---- API Key RumahOTP (default) ----
// Kalau diisi di sini, semua user langsung bisa pakai tanpa admin harus
// input manual di Dashboard Admin > Pengaturan.
// Kalau dikosongkan, admin WAJIB isi API key lewat Dashboard Admin > Pengaturan
// (nilai dari Pengaturan admin akan selalu diprioritaskan di atas nilai di sini).
const RUMAHOTP_API_KEY_DEFAULT = "";
