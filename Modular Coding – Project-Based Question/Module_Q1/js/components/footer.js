export function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = '<p>&copy; 2025 My Todo App</p>';
  footer.style.cssText = 'background:#eee; padding:1rem; text-align:center; margin-top:2rem;';
  return footer;
}