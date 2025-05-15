class ThemeToggler {
  constructor(buttonId, target = document.body) {
    this.button = document.getElementById(buttonId);
    this.target = target;
    this.themeKey = "theme";

    this.applySavedTheme();
    this.button.addEventListener("click", () => this.toggleTheme());
  }

  applySavedTheme() {
    const saved = localStorage.getItem(this.themeKey);
    if (saved === "dark") {
      this.target.classList.add("dark");
    } else {
      this.target.classList.remove("dark");
    }
  }

  toggleTheme() {
    const isDark = this.target.classList.toggle("dark");
    localStorage.setItem(this.themeKey, isDark ? "dark" : "light");
  }
}

new ThemeToggler("theme-toggle");