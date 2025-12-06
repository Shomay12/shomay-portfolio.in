// ===== Mobile navigation toggle =====
const navToggle = document.getElementById("nav-toggle");
const navbar = document.getElementById("navbar");

if (navToggle && navbar) {
  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });

  // Close menu on link click (mobile)
  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });
}

// ===== Dynamic year in footer =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===== Contact form with EmailJS =====
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus && window.emailjs) {
  // 1. Initialize EmailJS with your PUBLIC KEY
  emailjs.init("Sg7OF0ug4igAOZ1vb"); // e.g. emailjs.init("AbCdEfGhIjKlMn");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    formStatus.textContent = "Sending message...";
    
    // 2. Send the form using your SERVICE_ID and TEMPLATE_ID
    emailjs
      .sendForm("service_f0fdxk9", "template_tft8ot2", this)
      .then(
        function () {
          formStatus.textContent = "Message sent successfully. I will reply soon.";
          contactForm.reset();

          setTimeout(() => {
            formStatus.textContent = "";
          }, 5000);
        },
        function (error) {
          console.error("EmailJS error:", error);
          formStatus.textContent = "Failed to send message. Please try again later.";
        }
      );
  });
} else {
  // Optional: debugging if something is missing
  console.warn("Contact form or EmailJS is not properly initialized.");
}
