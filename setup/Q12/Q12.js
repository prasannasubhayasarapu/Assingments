// Get elements
const ul = document.querySelector('#item-list');
const addButton = document.getElementById('add-btn');

// Counter to track how many new items we've added
let newItemCount = 0;

// Add event listener to button
addButton.addEventListener('click', () => {
    newItemCount++; // Increment counter

    // Create new li element
    const newLi = document.createElement('li');
    newLi.textContent = 'New Item';

    // Check if sequence number is odd or even
    if (newItemCount % 2 === 1) {
        // Odd: bold + blue
        newLi.style.fontWeight = 'bold';
        newLi.style.color = 'blue';
    } else {
        // Even: italic + red
        newLi.style.fontStyle = 'italic';
        newLi.style.color = 'red';
    }

    // Append to ul
    ul.appendChild(newLi);
});