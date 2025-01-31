<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fugrow | Login</title>
    <link rel="stylesheet" href="./assets/css/login.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>

<body>
    <div class="login-container">
        <div class="login-header">
            <img src="a.jpg" alt="Fugrow Logo" class="logo">
            <h1>Welcome to Fugrow</h1>
            <p>Login to access your account and explore the future of agriculture.</p>
        </div>
        <form class="login-form" id="loginForm">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
                <span class="error-message" id="emailError"></span>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
                <span class="error-message" id="passwordError"></span>
            </div>
            <button type="submit" class="login-button">Login</button>
            <div class="signup-link">
                <p>Don't have an account? <a href="signup.php">Sign up</a></p>
            </div>
        </form>
    </div>

    <script>
        // Get form and input elements
        const loginForm = document.getElementById('loginForm');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        // Add event listener for form submission
        loginForm.addEventListener('submit', function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Reset error messages
            emailError.textContent = '';
            emailError.style.display = 'none';
            passwordError.textContent = '';
            passwordError.style.display = 'none';

            // Validate email
            const email = emailInput.value.trim();
            if (!email || !validateEmail(email)) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.display = 'block';
                return;
            }

            // Validate password
            const password = passwordInput.value.trim();
            if (!password || password.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters long.';
                passwordError.style.display = 'block';
                return;
            }

            // If validation passes, submit the form (or simulate submission)
            alert('Login successful!');
            // Uncomment the following line to submit the form:
            // loginForm.submit();
        });

        // Function to validate email format
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    </script>
</body>

</html>