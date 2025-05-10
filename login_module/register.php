<?php
session_start();
header('Content-Type: application/json'); // Set response type to JSON

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_auth";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed!"]));
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['register'])) {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirm_password = $_POST['confirm_password'] ?? '';

    if (empty($email) || empty($password) || empty($confirm_password)) {
        echo json_encode(["status" => "error", "message" => "All fields are required!"]);
        exit();
    }

    // Check if email already exists
    $check_query = "SELECT * FROM users WHERE email='$email'";
    $check_result = mysqli_query($conn, $check_query);

    if (mysqli_num_rows($check_result) > 0) {
        echo json_encode(["status" => "error", "message" => "Email already exists!"]);
    } elseif ($password !== $confirm_password) {
        echo json_encode(["status" => "error", "message" => "Passwords do not match!"]);
    } else {
        // Generate OTP
        $otp = rand(100000, 999999);
        $_SESSION['otp'] = $otp;
        $_SESSION['email'] = $email;
        $_SESSION['password'] = password_hash($password, PASSWORD_BCRYPT); // Secure hashing

        // Send OTP via email
        $subject = "Madmax Shopping OTP Verification Code";
        $message = "Don't share your OTP with anyone. Your OTP is: " . $otp;
        $headers = "From: madmaxshopping@gmail.com";

        if (mail($email, $subject, $message, $headers)) {
            echo json_encode(["status" => "success", "message" => "OTP sent! Please check your ..."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to send OTP. Check email settings."]);
        }
    }
}
$conn->close();
?>
