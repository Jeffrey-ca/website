// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = htmlspecialchars(stripslashes(trim($_POST["name"])));
    $email = htmlspecialchars(stripslashes(trim($_POST["email"])));
    $phone = htmlspecialchars(stripslashes(trim($_POST["phone"])));
    $message = htmlspecialchars(stripslashes(trim($_POST["message"])));

    // Your email where you want to receive the inquiries
    $to = 'StumpRemovalLLC@gmail.com';
    $subject = 'Inquiry from Website';
    $body = "You have received a new inquiry from your website:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message: $message\n";

    // Headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your inquiry, we will get back to you soon.";
    } else {
        echo "There was a problem sending your inquiry.";
    }
} else {
    // Not a POST request, redirect to the form or display an error
    echo "Form submission error.";
}

