// Toggle Musik
function toggleMusic() {
  const music = document.getElementById("backgroundMusic");
  music.paused ? music.play() : music.pause();
}

// Toggle Mode Gelap / Terang
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

// Bahasa Indonesia ↔ Inggris
const translations = {
  id: {
    subtitle: "Pengembang Web | Desainer UI/UX",
    btnDownloadCV: "Unduh Ringkasan",
    resumeTitle: "Ringkasan",
	description: "Saya adalah seorang pengembang web yang bersemangat membangun aplikasi yang fungsional dan estetis. Dengan pengalaman di front-end dan back-end, saya siap membantu Anda mewujudkan ide digital menjadi kenyataan.",
    eduTitle: "Pendidikan",
    expTitle: "Pengalaman",
    skillsTitle: "Keterampilan",
    portfolioTitle: "Proyek Portofolio",
    contactTitle: "Kontak",
	kasirTitle: "Fitur admin kelola data produk, laporan penjualan dan melihat grafik. Fitur kasir Tanda terima pelanggan, Pembayaran, dan cetak nota atau nota whatsapp.",
	inventoriTitle: "Fitur admin kelola data barang, kategori, supplier, lokasi gudang, penyesuaian stok, log aktivitas, manajemen pengguna, barang masuk, barang keluar dan laporan. Fitur petugas data barang, barang masuk, barang keluar dan laporan.",
  },
  en: {
    subtitle: "Web Developer | UI/UX Designer",
    btnDownloadCV: "Download Resume",
    resumeTitle: "Resume",
	description: "I’m a passionate web developer who loves building functional and aesthetic applications. With experience in both front-end and back-end, I’m ready to turn your digital ideas into reality.",
    eduTitle: "Education",
    expTitle: "Experience",
    skillsTitle: "Skills",
    portfolioTitle: "Portfolio Projects",
    contactTitle: "Contact",
	kasirTitle: "Fitur admin kelola data produk, laporan penjualan dan melihat grafik. Fitur kasir Tanda terima pelanggan, Pembayaran, dan cetak nota atau nota whatsapp.",
	inventoriTitle: "Fitur admin kelola data barang, kategori, supplier, lokasi gudang, penyesuaian stok, log aktivitas, manajemen pengguna, barang masuk, barang keluar dan laporan. Fitur petugas data barang, barang masuk, barang keluar dan laporan.",
  }
};

function switchLanguage() {
  const lang = document.getElementById("langSwitcher").value;
  const t = translations[lang];
  for (const id in t) {
    document.getElementById(id).textContent = t[id];
  }
}





