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

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['otp'])) {
    $entered_otp = $_POST['otp'];

    if (!isset($_SESSION['otp']) || !isset($_SESSION['email']) || !isset($_SESSION['password'])) {
        echo json_encode(["status" => "error", "message" => "Session expired. Please register again."]);
        exit();
    }

    $stored_otp = $_SESSION['otp'];
    $email = $_SESSION['email'];
    $hashed_password = $_SESSION['password']; // Password is already hashed

    if ($entered_otp == $stored_otp) {
        // Insert user into database
        $insert_query = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";
        if ($conn->query($insert_query) === TRUE) {
            // Clear session variables
            unset($_SESSION['otp'], $_SESSION['email'], $_SESSION['password']);
            echo json_encode(["status" => "success", "message" => "Registration successful! Redirecting to login..."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Database error: " . $conn->error]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid OTP! Please try again."]);
    }
}
$conn->close();
?>
