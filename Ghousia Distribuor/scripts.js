// script.js
document.addEventListener('DOMContentLoaded', () => {
    const signupContainer = document.getElementById('signup-container');
    const loginContainer = document.getElementById('login-container');
    const goToLogin = document.getElementById('go-to-login');
    const goToSignup = document.getElementById('go-to-signup');

    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Toggle Forms
    goToLogin.addEventListener('click', () => {
        signupContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
    });

    goToSignup.addEventListener('click', () => {
        loginContainer.classList.add('hidden');
        signupContainer.classList.remove('hidden');
    });

    // Signup Form Submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const number = document.getElementById('signup-number').value;
        const location = document.getElementById('signup-location').value;

        const user = { name, email, password, number, location };
        localStorage.setItem(email, JSON.stringify(user));

        alert('Signup successful! Please login.');
        signupForm.reset();
        goToLogin.click();
    });

    // Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = JSON.parse(localStorage.getItem(email));

        if (user && user.password === password) {
            alert(`Welcome To Ghousia Distributor  ${user.name}!`); 
            // Redirect to dashboard
            window.location.href = 'index.html'; // Create this page
        } else {
            alert('Invalid email or password!');
        }
    });
});
