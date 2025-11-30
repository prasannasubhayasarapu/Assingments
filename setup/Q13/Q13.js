// Get elements
const colorInput = document.getElementById('colorInput');
const textInput = document.getElementById('textInput');
const changeBgBtn = document.getElementById('changeBgBtn');
const updateTextBtn = document.getElementById('updateTextBtn');
const targetDiv = document.getElementById('targetDiv');

// Task 1: Change Background Button
changeBgBtn.addEventListener('click', () => {
    const color = colorInput.value.trim(); // Remove extra spaces

    // Try setting the color — if it fails, browser ignores invalid colors
    targetDiv.style.backgroundColor = color;

    // Check if color was applied by comparing current style
    // (This is a simple way to detect invalid colors)
    if (targetDiv.style.backgroundColor === '') {
        alert("Invalid color name!");
        // Reset to white or default
        targetDiv.style.backgroundColor = 'white';
    }
});

// Task 2: Update Text Button
updateTextBtn.addEventListener('click', () => {
    const text = textInput.value.trim();

    if (text === '') {
        alert("Please enter some text!");
        return; // Stop execution
    }

    targetDiv.textContent = text;
});