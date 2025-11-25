<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "metallbord@gmail.com";
    $subject = "Poruka sa web stranice";
    $body = "Ime: $name\nEmail: $email\nPoruka: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Poruka je uspješno poslana!";
    } else {
        echo "Došlo je do greške pri slanju poruke.";
    }
}
?>
