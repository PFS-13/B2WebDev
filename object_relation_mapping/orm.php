<?php
require_once 'Database.php';
require_once 'User.php';

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $user = new User();
    $foundUser = $user->findByUsernameAndPassword($username, $password);

    if ($foundUser) {
        echo "Login Berhasil! Selamat datang, " . $foundUser->username;
    } else {
        echo "Login Gagal! Username atau password salah.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h1>Object Relation Mapping</h1>
    <form action="" method="POST">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required><br>

        <button type="submit" name="submit">Login</button>
    </form>
</body>
</html>
