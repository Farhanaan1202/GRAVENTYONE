document.addEventListener("DOMContentLoaded", function () {

  /* ================= EMAIL JS ================= */
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_iz56bil",
        "template_vbydjlk",
        this
      ).then(
        function () {
          alert("Pesan berhasil dikirim!");
          form.reset();
        },
        function (error) {
          alert("Gagal mengirim email");
          console.log(error);
        }
      );
    });
  }

  /* ================= TAB MEMBER & PETINGGI ================= */
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".members-profile");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const tabNumber = button.dataset.forTab;

      tabButtons.forEach(btn =>
        btn.classList.remove("tab-button-active")
      );
      button.classList.add("tab-button-active");

      tabContents.forEach(content =>
        content.classList.remove("members-profile-active")
      );

      const activeTab = document.querySelector(
        `.members-profile[data-tab="${tabNumber}"]`
      );
      if (activeTab) {
        activeTab.classList.add("members-profile-active");
      }
    });
  });

});
