// Mendapatkan elemen navbar
const navbar = document.getElementById("navbar");

// Tambahkan event listener untuk mengamati saat pengguna menggulir halaman
document.addEventListener("scroll", () => {
  // Jika posisi scroll lebih dari 0, tambahkan kelas "scrolled" ke elemen navbar
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    // Jika posisi scroll kembali ke atas, hapus kelas "scrolled" dari elemen navbar
    navbar.classList.remove("scrolled");
  }
});
