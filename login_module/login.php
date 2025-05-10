<?php
session_start();
$conn = new mysqli("localhost", "root", "", "user_auth");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        if (password_verify($password, $user['password'])) {
            $_SESSION['email'] = $email;
            echo "<script>alert('Login successful!'); window.location.href='http://localhost:5173/';</script>";
        } else {
            echo "<script>alert('Incorrect password!'); window.location.href='index.html';</script>";
        }
    } else {
        echo "<script>alert('Email not found! Please register.'); window.location.href='register.html';</script>";
    }
}

$conn->close();
?>
