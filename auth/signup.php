<?php

global $conn;
session_start();
require_once "../config/db_conn.php";
include('auth.php'); // Include authentication functions



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    if (user_exists($email)) {
        $error = "Email is already registered!";
    } else {
        $user = register_user($username, $email, $password, $conn);
        if ($user) {
            login($user);
        } else {
            $error = "Signup failed! Please try again.";
        }
    }
}
?>