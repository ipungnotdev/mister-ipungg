/* =====================================================================
   KONFIGURASI ipunggOtp
   File ini dipisah dari index.html biar gampang diedit tanpa
   ngoprek kode utama. Wajib disimpan satu folder dengan index.html.
   ===================================================================== */

// ---- Konfigurasi Firebase (Realtime Database + Auth) ----
// Ambil dari Firebase Console > Project Settings > General > Your apps
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBWS8pP9qWvB--ozO60tGJkPuOQqC_JQo4",
  authDomain: "abbas-4fed6.firebaseapp.com",
  databaseURL: "https://abbas-4fed6-default-rtdb.firebaseio.com",
  storageBucket: "abbas-4fed6.firebasestorage.app",
  messagingSenderId: "709195792466",
  appId: "1:709195792466:web:47108bc87df021641fdf8b"
};

// ---- API Key RumahOTP (default) ----
// Kalau diisi di sini, semua user langsung bisa pakai tanpa admin harus
// input manual di Dashboard Admin > Pengaturan.
// Kalau dikosongkan, admin WAJIB isi API key lewat Dashboard Admin > Pengaturan
// (nilai dari Pengaturan admin akan selalu diprioritaskan di atas nilai di sini).
const RUMAHOTP_API_KEY_DEFAULT = "";
