const html = document.querySelector("html");
const toggleSwitch = document.querySelector("#theme-toggle");
function toggleSwitchFn() {
  const isDark = event.target.checked;
  html.classList.toggle("dark", isDark);
}

function getSavedTheme() {
  const isDark = localStorage.getItem("isDarkMode") === "true";
  html.classList.toggle("dark", isDark);
  toggleSwitch.checked = isDark;
}

getSavedTheme();

toggleSwitch?.addEventListener("change", toggleSwitchFn);

// ---------- DARK MODE ----------
// const root = document.documentElement;
// const btn = document.querySelector("#toggle");

// if (btn) {
//   btn.addEventListener("click", () => {
//     root.classList.toggle("dark");
//   });
// }
