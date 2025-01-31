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
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </form>
  </div>

  <script src="script.js"></script>
</body>
</html>