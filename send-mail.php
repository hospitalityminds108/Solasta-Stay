<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "smmsolastastaysbanquets@gmail.com";
$subject = "New Contact Form Message";

$body = "Name: $name\nEmail: $email\nMessage:\n$message";

$headers = "From: $email";

mail($to,$subject,$body,$headers);

echo "Message sent successfully";

}

?>