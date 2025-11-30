// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
    const text = taskInput.value.trim();

    // Handle empty input
    if (text === '') {
        alert('Please enter a task!');
        taskInput.focus();
        return;
    }

    // Create list item
    const li = document.createElement('li');

    // Create task text span
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = text;

    // Create buttons container
    const buttonContainer = document.createElement('div');

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.style.marginRight = '8px';
    completeBtn.addEventListener('click', () => {
        taskText.classList.toggle('completed');
        // Optional: change button text dynamically
        completeBtn.textContent = taskText.classList.contains('completed') 
            ? 'Undo' 
            : 'Complete';
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Assemble elements
    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);
    li.appendChild(taskText);
    li.appendChild(buttonContainer);

    // Add to list
    taskList.appendChild(li);

    // Clear input and focus
    taskInput.value = '';
    taskInput.focus();
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);

// Allow adding task with Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});