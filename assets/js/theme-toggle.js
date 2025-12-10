// THEME TOGGLE SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.querySelector(".theme-toggle");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);
  } else {
    body.classList.add("light"); // default theme
  }

  // Toggle theme on click
  toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
    }
  });
});
