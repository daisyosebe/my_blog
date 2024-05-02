// (LIGHT MODE DARK MODE)
// WHEN I click the light mode/dark mode toggle,
// THEN the page content's styles update to reflect the selection.
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    modeToggle.textContent = 'Dark Mode';
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    modeToggle.textContent = 'Light Mode';
  }
});