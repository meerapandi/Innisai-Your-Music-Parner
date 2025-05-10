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
    $user_otp = $_POST['otp'];

    if (isset($_SESSION['otp']) && $_SESSION['otp'] == $user_otp) {
        $email = $_SESSION['email'];

        // Generate new temporary password
        $temp_password = substr(str_shuffle("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"), 0, 10);
        $hashed_temp_password = password_hash($temp_password, PASSWORD_BCRYPT);

        // Update password in database
        $updateQuery = "UPDATE users SET password='$hashed_temp_password' WHERE email='$email'";
        mysqli_query($conn, $updateQuery);

        // Send the temporary password via email
        $subject = "MadMAX Shopping Temporary Password";
        $message = "Your new temporary password is: $temp_password\n\nPlease log in and change your password immediately.";
        $headers = "From: madmaxshopping@gmail.com";

        if (mail($email, $subject, $message, $headers)) {
            unset($_SESSION['otp']);
            echo "<script>alert('Temporary password sent to your email!'); window.location.href='index.html';</script>";
        } else {
            echo "<script>alert('Failed to send email.');</script>";
        }
    } else {
        echo "<script>alert('Invalid OTP! Please try again.'); window.location.href='verify_otp2.html';</script>";
    }
}
?>
