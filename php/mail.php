<?php

$name = $_POST['name'];
$company = $_POST['company'];  
$phone = $_POST['phone']; 
$email = $_POST['email']; 
$message = $_POST['message']; 
$subject = "Message from Website!";
$to = "jonathan.dikteruk@gmail.com";
$mailHeader = "From: ".$name."<".email.">";

mail($to,$subject, $message, $mailHeader)
or die("Error!");

echo'Thanks!'; //Insert Thank You.html html
?>