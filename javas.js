document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');

    togglePasswordBtn.addEventListener('click', () => {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        
        togglePasswordBtn.textContent = isPassword ? 'Hide' : 'Show';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        console.log('Logging in with:', { email, password });

        if(email === "admin@gmail.com" && password === "123"){
            window.location.href="./home.html";
        } else {
            alert("email atau password salah!");
        }
    });
});
