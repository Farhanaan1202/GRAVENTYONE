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
document.addEventListener("DOMContentLoaded", function () {

  let slideIndex = 0;
  const slides = document.querySelectorAll(".slides img");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if (slides.length === 0) return;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });

  prevBtn.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });

  // Auto slide (opsional)
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 4000);

});
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".member-animate");

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 120); // delay satu-satu
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));
});

function showMenu() {
  document.getElementById("responsive").style.transform = "translateX(0)";
}

function hideMenu() {
  document.getElementById("responsive").style.transform = "translateX(100%)";
}

