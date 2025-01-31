<?php
require_once "../config/db_conn.php";



session_start();
function only_auth()
{
    if (!isset($_SESSION['user_id'])) { // Check if user_id session is not set
        header("Location: login.php"); // Redirect to login page if not logged in
        exit();
    }
}

function verify_auth($email, $password)
{
    $conn = new mysqli('localhost', 'username', 'password', 'database');

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        if (password_verify($password, $user['password'])) {
            return $user;       }
    }
    return false;
}

function verify_and_login($email,$password)
{
    $user = verify_auth($email, $password);
    if ($user) {
        login($user);
    }
}
{

}


function login($user)
{
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['email'] = $user['email'];
    header("Location: index.php");
    exit();
}

function logout()
{
    session_unset();
    session_destroy();
    header("Location: login.php");
    exit();
}

