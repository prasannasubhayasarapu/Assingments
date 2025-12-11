export function displayTodos(data) {
  const container = document.getElementById('todosList');
  if (!container) return;

  // Optional: filter only current user? (JSONPlaceholder uses userId 1–10)
  // For demo, just show first 20 todos
  const todosToShow = data.slice(0, 20);

  container.innerHTML = todosToShow
    .map(todo => `
      <div style="border:1px solid #ccc; padding:0.5rem; margin:0.5rem 0; background:${todo.completed ? '#e6ffe6' : '#fff'}">
        <strong>${todo.title}</strong>
        <span style="color:${todo.completed ? 'green' : 'red'}">
          — ${todo.completed ? '✔ Done' : '⏳ Pending'}
        </span>
      </div>
    `)
    .join('');
}