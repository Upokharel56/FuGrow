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
                <input type="email" id="email" name="email" placeholder="Enter your email" required="">
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
            <button type="submit" class="signup-button">Sign Up</button>
            <div class="login-link">
                <p>Already have an account? <a href="login.html">Log in</a></p>
            </div>
        </form>
    </div>
</body>

</html>