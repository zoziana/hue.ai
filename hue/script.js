const continueBtn = document.getElementById('continue-btn');
const nameInput = document.getElementById('name');

// on page load, restore the saved name if it exists
window. addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('hueUserName');
    if (savedName) {
        nameInput.value = savedName;
    }
});

continueBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();

    if (name === '') {
        alert('Please enter your name before continuing.');
        return;
    }   

    localStorage. setItem('hueUserName', name);
    alert(`Welcome, ${name}! Closet feature coming soon.`);
});




