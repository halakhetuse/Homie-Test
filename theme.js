const themeButton = document.getElementById("theme-btn1");
const savedTheme = localStorage.getItem("homie-theme") === "dark"
  ? "dark"
  : "light";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (themeButton) {
    themeButton.textContent =
      theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  }
}

applyTheme(savedTheme);

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("homie-theme", newTheme);
    applyTheme(newTheme);
  });
}