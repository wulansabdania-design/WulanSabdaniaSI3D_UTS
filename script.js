document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a[data-menu]");
  const welcomeTitle = document.getElementById("banner-title");
  
  // Ambil elemen berdasarkan ID kartu di index.html kamu
  const cardMain = document.getElementById("card-main");
  const cardStatistik = document.getElementById("card-aside");
  const cardSection1 = document.getElementById("card-section1");
  const cardSection2 = document.getElementById("card-section2");
  const cardFooter = document.getElementById("card-footer");
  const btnSignOut = document.querySelector(".sign-out");

  // HAPUS SEMUA CLASS ACTIVE SAAT PERTAMA KALI HALAMAN DIBUKA
  navLinks.forEach((link) => link.classList.remove("active"));

  function resetCardHighlights() {
    cardMain.classList.remove("card-shadow-effect");
    cardStatistik.classList.remove("card-shadow-effect");
    cardSection1.classList.remove("card-shadow-effect");
    cardSection2.classList.remove("card-shadow-effect");
    cardFooter.classList.remove("card-shadow-effect");
  }

  function setActiveNav(clickedLink) {
    navLinks.forEach((link) => link.classList.remove("active"));
    clickedLink.classList.add("active");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const menuType = link.getAttribute("data-menu");

      // Mengaktifkan warna pada menu yang diklik
      setActiveNav(link);
      resetCardHighlights();

      switch (menuType) {
        case "home":
          // Teks default Home
          welcomeTitle.innerHTML = "Selamat Datang, WULAN SABDANIA<br>Kelas SI-3D";
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;

        case "mahasiswa":
          // Menu Mahasiswa mengubah teks khusus profil
          welcomeTitle.innerHTML = "Selamat Datang, WULAN SABDANIA";
          break;

        case "kelas":
          // Mengubah teks banner utama sekaligus memberikan highlight/shadow
          welcomeTitle.innerHTML = "Selamat Datang, WULAN SABDANIA<br> Kelas SI-3D";
          cardSection1.classList.add("card-shadow-effect");
          break;

        case "aktifitas":
          // Hanya memberikan highlight/shadow tanpa scroll ke bawah
          cardSection2.classList.add("card-shadow-effect");
          break;

        case "statistik":
          // Hanya memberikan highlight/shadow tanpa scroll ke bawah
          cardStatistik.classList.add("card-shadow-effect");
          break;

        case "dokumen":
          // HANYA BAGIAN DOKUMEN SAJA YANG BERGESER (SCROLL) KE BAWAH
          cardFooter.classList.add("card-shadow-effect");
          cardFooter.scrollIntoView({ behavior: "smooth", block: "center" });
          break;
      }
    });
  });

  if (btnSignOut) {
    btnSignOut.addEventListener("click", (e) => {
      e.preventDefault(); 
    });
  }
});