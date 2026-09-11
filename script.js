const whatsappButton = document.querySelector(".contact .button");

whatsappButton.addEventListener("click", function (event) {
  event.preventDefault();

  alert("Terima kasih! Silakan hubungi Kopi Senja melalui WhatsApp.");

  window.open(
    "https://wa.me/6285882244181?text=Halo%20Kopi%20Senja%2C%20saya%20ingin%20bertanya%20tentang%20menu.",
    "_blank",
  );
});
