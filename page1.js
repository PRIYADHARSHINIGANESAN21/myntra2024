const profileLogo = document.getElementById('myimage'); // Fixed ID
const loginForm = document.getElementById('loginForm');

// When the profile logo is clicked, show the login form
profileLogo.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from bubbling
    loginForm.style.display = 'block'; // Show login form
});

// When clicking anywhere else, hide the login form
document.addEventListener('click', (event) => {
    // Check if the click was outside the login form and the profile logo
    if (!loginForm.contains(event.target) && event.target !== profileLogo) {
        loginForm.style.display = 'none'; // Hide the form
    }
});

// Ensure the login form is hidden when the page loads
window.onload = () => {
    loginForm.style.display = 'none';
};