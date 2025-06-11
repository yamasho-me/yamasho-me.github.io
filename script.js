class ThemeToggler {
  constructor(buttonId, target = document.body) {
    this.button = document.getElementById(buttonId);
    this.target = target;
    this.themeKey = "theme";
    this.html = document.documentElement;

    this.applySavedTheme();
    this.button.addEventListener("click", () => this.toggleTheme());
  }

  applySavedTheme() {
    const saved = localStorage.getItem(this.themeKey);
    if (saved === "light") {
      this.target.classList.remove("dark");
      this.html.classList.remove("dark");
    } else {
      // savedが"dark"またはnull/undefinedならダークテーマ
      this.target.classList.add("dark");
      this.html.classList.add("dark");
    }
  }

  toggleTheme() {
    const isDark = this.target.classList.toggle("dark");
    this.html.classList.toggle("dark", isDark);
    localStorage.setItem(this.themeKey, isDark ? "dark" : "light");
  }
}

class AutoGalleryScroller {
  constructor(selector, speed = 1) {
    this.gallery = document.querySelector(selector);
    if (!this.gallery) return;
    this.speed = speed; // px単位の毎フレーム移動量
    this.rafId = null;
    this.animate = this.animate.bind(this);
    this.start();
  }

  animate() {
    if (!this.gallery) return;
    // 無条件でスクロールし続ける
    let next = this.gallery.scrollLeft + this.speed;
    // 端まで行ったら戻す
    if (next >= this.gallery.scrollWidth - this.gallery.clientWidth) {
      next = 0;
    }
    this.gallery.scrollLeft = next;
    this.rafId = requestAnimationFrame(this.animate);
  }

  start() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(this.animate);
  }

  stop() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new AutoGalleryScroller('.angled-gallery', 2); // 常にスクロール
});

// メニューボタンの開閉制御
document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }
});

new ThemeToggler("theme-toggle");

