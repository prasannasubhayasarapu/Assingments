// Get elements
const para = document.querySelector('#message'); // ✅ Fixed: Corrected ID from '#massage' to '#message'
const textButton = document.getElementById('textButton'); // ✅ Fixed: Replaced getElementByName with getElementById
const box = document.getElementById('box');
const colorButton = document.getElementById('colorButton');

// Add event listener to "Change Text" button
textButton.addEventListener('click', () => { // ✅ Fixed: Changed addClickEventListener to addEventListener
    para.textContent = 'New Message'; // ✅ Fixed: Changed contentText to textContent
});

// Add event listener to "Change Background" button
colorButton.addEventListener('click', () => {
    box.style.backgroundColor = 'blue'; // ✅ Fixed: Corrected 'styl' to 'style'
});