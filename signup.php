<?php
require_once "./auth/_signup.php";


?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/signup.css">
    <title>FuGrow | Signup</title>
</head>

<body>
    <div class="signup-container">
        <div class="signup-header">
            <h1>Join Fugrow</h1>
            <p>Create an account to explore the future of agriculture.</p>
        </div>
        <form class="signup-form" id="signupForm">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required="">
                <span class="error-message" id="nameError"></span>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Enter your email" required="">
                <span class="error-message" id="emailError"></span>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required="">
                <span class="error-message" id="passwordError"></span>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required="">
                <span class="error-message" id="confirmPasswordError"></span>
            </div>
            <div class="form-group">
                <label for="role">Role</label>
                <select name="role" id="role">
                    <option value="farmer" selected>Farmer</option>
                    <option value="vendor">Vendor</option>
                </select>
            </div>
            <button type="submit" class="signup-button">Sign Up</button>
            <div class="login-link">
                <p>Already have an account? <a href="login.php">Log in</a></p>
            </div>
        </form>
    </div>

    <script>
        // Get form and input elements
        const signupForm = document.getElementById('signupForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');

        // Add event listener for form submission
        signupForm.addEventListener('submit', function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Reset error messages
            nameError.textContent = '';
            nameError.style.display = 'none';
            emailError.textContent = '';
            emailError.style.display = 'none';
            passwordError.textContent = '';
            passwordError.style.display = 'none';
            confirmPasswordError.textContent = '';
            confirmPasswordError.style.display = 'none';

            // Validate name
            const name = nameInput.value.trim();
            if (!name) {
                nameError.textContent = 'Please enter your full name.';
                nameError.style.display = 'block';
                return;
            }

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

            // Validate confirm password
            const confirmPassword = confirmPasswordInput.value.trim();
            if (password !== confirmPassword) {
                confirmPasswordError.textContent = 'Passwords do not match.';
                confirmPasswordError.style.display = 'block';
                return;
            }

            // Uncomment the following line to submit the form:
            signupForm.submit();
            alert('Sign up successfull!');
        });

        // Function to validate email format
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    </script>
</body>

</html>