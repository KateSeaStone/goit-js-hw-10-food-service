function saveTheme(theme) {
  localStorage.setItem('Theme', theme)
}

function getTheme() {
  return localStorage.getItem('Theme');
}

export {
  saveTheme,
  getTheme }