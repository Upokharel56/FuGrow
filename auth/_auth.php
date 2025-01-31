<?php
$conn = require_once "../config/_db_conn.php";



session_start();
function only_auth()
{
    if (!isset($_SESSION['user_id'])) { // Check if user_id session is not set
        header("Location: login.php"); // Redirect to login page if not logged in
        exit();
    }
}

function user_exists($email)
{

    global $conn;
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
//        $user = $result->fetch_assoc();
        return true;
    }
    return false;
}

function verify_and_login($email,$password)
{
    $user = user_exists($email, $password);
    if ($user) {
        login($user);
        return $user;
    }
    return false;
}



function login($user)
{
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['email'] = $user['email'];

    return $user;
//    header("Location: index.php");
//    exit();
}

function logout()
{
    session_unset();
    session_destroy();
    header("Location: login.php");
    exit();
}

function register_user($username, $email, $password, $conn) {
    $role = "user"; // Default role for new users
    $password_hash = password_hash($password, PASSWORD_BCRYPT);

    $stmt = $conn->prepare("INSERT INTO users (username, email, password_hash, role, created_at, updated_at)
                            VALUES (?, ?, ?, ?, NOW(), NOW())");
    return $stmt->execute([$username, $email, $password_hash, $role]);
}
