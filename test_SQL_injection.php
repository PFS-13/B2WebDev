<?php
$host = 'localhost';
$dbname = 'dummy_db';
$username = 'root';
$password = '';

// Membuat koneksi ke database
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

// Mengecek apakah form telah di-submit
if (isset($_POST['submit'])) {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // Query yang rentan terhadap SQL Injection
    $query = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
    $stmt = $conn->query($query);

    // Mengecek apakah ada user yang sesuai
    if ($stmt->rowCount() > 0) {
        echo "Login Berhasil!";
    } else {
        echo "Login Gagal!";
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
    <h1>Test SQL Injection</h1>
    <form action="" method="POST">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required><br>

        <button type="submit" name="submit">Login</button>
    </form>
</body>
</html>
