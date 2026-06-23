const themes = [
  { name: "light", message: "light theme" },
  { name: "dark", message: "dark theme" }
];

const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeList = document.getElementById("theme-dropdown");
const message = document.querySelector("[aria-live='polite']")

themeSwitcherBtn.addEventListener("click", () => {
  if (themeList.hidden) {
    themeList.hidden = false;
    themeSwitcherBtn.setAttribute("aria-expanded", "true");
  } else {
    themeList.hidden = true;
    themeSwitcherBtn.setAttribute("aria-expanded", "false");
  }
})


themes.forEach((theme) => {
  const themeEl = document.getElementById(`theme-${theme.name}`);

  themeEl.addEventListener("click", () => {

    themes.forEach((t) => {
      document.body.classList.remove(`theme-${t.name}`);
    });
    
    document.body.classList.add(`theme-${theme.name}`);
    message.textContent = theme.message;
  })
})