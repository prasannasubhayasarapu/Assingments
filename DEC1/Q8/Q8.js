
    // Fetch todos and store first 20 in localStorage
    function get() {
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET"
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem("todos", JSON.stringify(data.slice(0, 20)));
          render();
        })
        .catch(err => console.error('Fetch error:', err));
    }

    // Render todos from localStorage
    function render() {
      const tasklist = document.getElementById("post-list");
      tasklist.innerHTML = "";

      const todos = JSON.parse(localStorage.getItem("todos")) || [];

      todos.forEach((todo, index) => {
        const li = document.createElement("li");

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => toggleComplete(index));

        // Title
        const titleSpan = document.createElement("span");
        titleSpan.textContent = todo.title;
        if (todo.completed) {
          titleSpan.classList.add("completed");
        }

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteTodo(index));

        // Assemble
        li.appendChild(checkbox);
        li.appendChild(titleSpan);
        li.appendChild(deleteBtn);

        tasklist.appendChild(li);
      });
    }

    // Toggle completed status
    function toggleComplete(index) {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      todos[index].completed = !todos[index].completed;
      localStorage.setItem("todos", JSON.stringify(todos));
      render();
    }

    // Delete todo by index
    function deleteTodo(index) {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      render();
    }

    // Initialize app
    get();
  