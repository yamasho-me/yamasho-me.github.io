/* Apply the saved appearance before rendering. Content also works without JS. */
(() => {
  const root = document.documentElement;
  root.classList.add('js');
  try {
    if (localStorage.getItem('theme') === 'light') root.dataset.theme = 'light';
  } catch (_) { /* Storage may be unavailable in private browsing. */ }

  document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.querySelector('.theme-toggle');
    const updateThemeLabel = () => {
      const light = root.dataset.theme === 'light';
      if (themeButton) {
        themeButton.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
        themeButton.setAttribute('title', light ? 'Dark mode' : 'Light mode');
      }
    };
    updateThemeLabel();
    themeButton?.addEventListener('click', () => {
      const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      root.dataset.theme = theme;
      try { localStorage.setItem('theme', theme); } catch (_) { /* Optional persistence. */ }
      updateThemeLabel();
    });

    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.site-nav');
    if (menuButton && navigation) {
      const setMenu = (open, restoreFocus = false) => {
        navigation.classList.toggle('is-open', open);
        document.body.classList.toggle('menu-open', open);
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        menuButton.textContent = open ? 'CLOSE −' : 'MENU +';
        if (restoreFocus) menuButton.focus();
      };
      menuButton.addEventListener('click', () => {
        const open = menuButton.getAttribute('aria-expanded') !== 'true';
        setMenu(open);
        if (open) navigation.querySelector('a')?.focus();
      });
      navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
      document.addEventListener('keydown', event => {
        if (!navigation.classList.contains('is-open')) return;
        if (event.key === 'Escape') { setMenu(false, true); return; }
        if (event.key === 'Tab') {
          const controls = [...navigation.querySelectorAll('a'), themeButton, menuButton].filter(Boolean);
          const index = controls.indexOf(document.activeElement);
          event.preventDefault();
          const next = event.shiftKey ? (index <= 0 ? controls.length - 1 : index - 1) : (index + 1) % controls.length;
          controls[next].focus();
        }
      });
      window.matchMedia('(max-width: 760px)').addEventListener('change', event => {
        if (!event.matches) setMenu(false);
      });
    }

    document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
  });
})();
