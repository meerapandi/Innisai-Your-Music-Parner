<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_auth";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    
    // Check if email exists in database
    $query = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {
        $_SESSION['email'] = $email;

        // Generate OTP
        $otp = rand(100000, 999999);
        $_SESSION['otp'] = $otp;

        // Send OTP via email
        $subject = "Password Reset OTP";
        $message = "Your OTP for password reset is: $otp";
        $headers = "madmaxshopping@gmail.com";

        if (mail($email, $subject, $message, $headers)) {
            echo "<script>alert('OTP sent to your email!'); window.location.href='verify_otp2.html';</script>";
        } else {
            echo "<script>alert('Failed to send OTP. Try again later.');</script>";
        }
    } else {
        echo "<script>alert('Email not found! Redirecting to register page.'); window.location.href='register.html';</script>";
    }
}
?>
