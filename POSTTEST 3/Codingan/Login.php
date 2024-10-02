<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
       
        $fullname = htmlspecialchars($_POST['fullname']);
        $email = htmlspecialchars($_POST['email']);
        $username = htmlspecialchars($_POST['username']);
        $password = htmlspecialchars($_POST['password']);
        $birthdate = htmlspecialchars($_POST['birthdate']);

        
        echo "<div class='container'>";
        echo "<h2>Data yang telah diinput:</h2>";
        echo "<p><strong>Full Name:</strong> $fullname</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Username:</strong> $username</p>";
        echo "<p><strong>Password:</strong> $password</p>";
        echo "<p><strong>Birth Date:</strong> $birthdate</p>";
        echo "</div>";
    }
    ?>