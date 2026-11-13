const themeButton = document.querySelector('.theme-button');

function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.setAttribute('aria-label', isDark ? '切换浅色模式' : '切换深色模式');
  themeButton.textContent = isDark ? '浅色模式' : '深色模式';
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#19251f' : '#244b3c';
}

let savedTheme = null;
try {
  savedTheme = localStorage.getItem('fuusetsu-theme');
} catch {
  // The site also works when the browser disables local storage.
}
setTheme(savedTheme === 'dark');

themeButton.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark');
  setTheme(isDark);
  try {
    localStorage.setItem('fuusetsu-theme', isDark ? 'dark' : 'light');
  } catch {
    // A theme change still applies for the current page.
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
