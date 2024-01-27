<?php
$to = "quandumomentum@gmail.com";
$subject = $_POST['subject'];
$mensage = $_POST['mensage'];
mail($to, $subject, $mensage);