import { createNavbar } from '../components/navbar.js';
import { createFooter } from '../components/footer.js';
import { displayTodos } from '../utils/displayTodos.js';

// Check if logged in
if (!localStorage.getItem('loggedInUser')) {
  alert('Please log in first.');
  window.location.href = 'login.html';
}

document.getElementById('app').prepend(createNavbar());
document.body.appendChild(createFooter());

// Fetch and display todos
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => displayTodos(data))
  .catch(err => {
    console.error('Failed to load todos:', err);
    document.getElementById('todosList').innerHTML = '<p>Failed to load todos.</p>';
  });