import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';

document.getElementById('app').prepend(createNavbar());
document.body.appendChild(createFooter());

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = localStorage.getItem(username);
  if (!user) {
    alert('User not found. Please sign up.');
    return;
  }

  const userData = JSON.parse(user);
  if (userData.password !== password) {
    alert('Incorrect password.');
    return;
  }

  localStorage.setItem('loggedInUser', username);
  window.location.href = 'todos.html';
});