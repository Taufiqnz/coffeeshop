const whatsappButton = document.querySelector(".contact .button");

whatsappButton.addEventListener("click", function (event) {
  event.preventDefault();

  alert("Terima kasih! Silakan hubungi Kopi Senja melalui WhatsApp.");

  window.open(
    "https://wa.me/6285882244181?text=Halo%20Kopi%20Senja%2C%20saya%20ingin%20bertanya%20tentang%20menu.",
    "_blank",
  );
});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
  ".intro-grid, .feature, .menu-card, .quote p, .contact-content",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
