export function createNavbar() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="signup.html">Signup</a></li>
      <li><a href="login.html">Login</a></li>
    </ul>
  `;
  nav.style.cssText = 'background:#333; padding:1rem; color:white;';
  nav.querySelector('ul').style.cssText = 'list-style:none; margin:0; padding:0; display:flex; gap:1rem;';
  nav.querySelectorAll('a').forEach(a => a.style.color = 'white');
  return nav;
}