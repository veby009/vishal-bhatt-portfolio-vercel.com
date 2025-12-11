// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.querySelector(".theme-toggle");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);
    toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  } else {
    body.classList.add("light"); // default theme
    toggleBtn.textContent = "🌙";
  }

  // Toggle theme on click
  toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    } else {
      body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    }
  });
});

// Certificate Lightbox
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  if (lightbox && lightboxImage) {
    lightbox.style.display = "flex";
    lightboxImage.src = src;
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("tabindex", "-1");
  }
}
const closeLightboxBtn = document.getElementById("closeLightbox");
const lightbox = document.getElementById("lightbox");
if (closeLightboxBtn && lightbox) {
  closeLightboxBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  });
}

// Contact Form (Mock)
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }
    alert(`Thank you, ${name}! Your message has been received.`);
    form.reset();
  });
}
