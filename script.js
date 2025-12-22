/* ==========================================
   Vishal Bhatt Portfolio (Hybrid v2)
   JavaScript Interactions
   ========================================== */

// --- Fade-in Scroll Animation ---
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));


// --- Smooth Scroll for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});


// --- Hero Video Sound Toggle ---
const video = document.getElementById('heroVideo');
const soundBtn = document.getElementById('soundToggle');

if (soundBtn && video) {
  soundBtn.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      soundBtn.textContent = "🔇 Mute Sound";
      soundBtn.style.background = "#d4af37";
      soundBtn.style.color = "#000";
    } else {
      video.muted = true;
      soundBtn.textContent = "🔈 Enable Sound";
      soundBtn.style.background = "rgba(0,0,0,0.4)";
      soundBtn.style.color = "#f8e48c";
    }
  });
}


// --- Scroll-To-Top Button ---
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerHTML = "⬆️";
document.body.appendChild(scrollTopBtn);

scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "25px";
scrollTopBtn.style.right = "25px";
scrollTopBtn.style.padding = "10px 15px";
scrollTopBtn.style.background = "#d4af37";
scrollTopBtn.style.color = "#000";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "50%";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.boxShadow = "0 0 10px rgba(212,175,55,0.5)";
scrollTopBtn.style.display = "none";
scrollTopBtn.style.transition = "opacity 0.3s ease";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
    scrollTopBtn.style.opacity = "1";
  } else {
    scrollTopBtn.style.opacity = "0";
    setTimeout(() => (scrollTopBtn.style.display = "none"), 300);
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// --- Contact Form Confirmation ---
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent successfully.");
    form.reset();
  });
}
