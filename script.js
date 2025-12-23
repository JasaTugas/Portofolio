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
	penjualanTitle: "Fitur admin kelola data produk, laporan penjualan dan melihat grafik.",
	kasirTitle: "Fitur kasir Tanda terima pelanggan, Pembayaran, dan cetak nota atau nota whatsapp.",
	inventoriTitle: "Fitur admin kelola data barang, kategori, supplier, lokasi gudang, penyesuaian stok, log aktivitas, manajemen pengguna, barang masuk, barang keluar dan laporan.",
	petugasTitle: "Fitur petugas data barang, barang masuk, barang keluar dan laporan.",
  },
  en: {
    subtitle: "Web Developer | UI/UX Designer",
    btnDownloadCV: "Download Resume",
    resumeTitle: "Resume",
	description: "I'm a web developer passionate about building functional and aesthetically pleasing applications. With experience in both front-end and back-end development, I'm ready to help you turn your digital ideas into reality.",
    eduTitle: "Education",
    expTitle: "Experience",
    skillsTitle: "Skills",
    portfolioTitle: "Portfolio Projects",
    contactTitle: "Contact",
	adminTitle: "Admin features allow you to manage product data, report sales, and view graphs.",
	kasirTitle: "Cashier features allow you to receive customer receipts, make payments, and print receipts or WhatsApp notes.",
	adminvTitle: "Admin features manage item data, categories, suppliers, warehouse locations, stock adjustments, activity logs, user management, incoming and outgoing goods, and reports.",
	petugasTitle: "Officer features manage item data, incoming and outgoing goods, and reports.",
  }
};

function switchLanguage() {
  const lang = document.getElementById("langSwitcher").value;
  const t = translations[lang];
  for (const id in t) {
    document.getElementById(id).textContent = t[id];
  }
}









