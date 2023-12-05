<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate and sanitize inputs as needed

    // Send email using mail() function or a library like PHPMailer
    $to = "hamzadamani7@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $name <$email>";

    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        echo "success";
    } else {
        // Email not sent
        echo "error";
    }
} else {
    // Invalid request method
    echo "error";
}
?>
