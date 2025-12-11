import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';

document.getElementById('app').prepend(createNavbar());
document.body.appendChild(createFooter());

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (localStorage.getItem(username)) {
    alert('User already exists!');
    return;
  }

  localStorage.setItem(username, JSON.stringify({ username, password }));
  alert('Signup successful!');
  window.location.href = 'login.html';
});