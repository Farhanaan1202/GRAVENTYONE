document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_iz56bil",   // SERVICE ID ASLI
      "template_vbydjlk",  // TEMPLATE ID ASLI
      "template_e106vqc",  // TEMPLATE ID ASLI
      this
    ).then(function () {
      alert("Pesan berhasil dikirim!");
    }, function (error) {
      alert("Gagal: " + error.text);
      console.log(error);
    });
  });
});
// TAB MEMBERS (Member & Petinggi)
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".members-profile");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const tabNumber = button.getAttribute("data-for-tab");

      // hapus aktif semua tombol
      tabButtons.forEach(btn => btn.classList.remove("tab-button-active"));
      // hapus aktif semua konten
      tabContents.forEach(content => content.classList.remove("members-profile-active"));

      // aktifkan tombol yg diklik
      button.classList.add("tab-button-active");
      // aktifkan konten sesuai tab
      document.querySelector(`.members-profile[data-tab="${tabNumber}"]`)
        .classList.add("members-profile-active");
    });
  });
});
