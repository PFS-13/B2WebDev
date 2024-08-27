<?php
$host = 'localhost';
$dbname = 'dummy_db';
$username = 'root';
$password = '';

// Membuat koneksi ke database menggunakan MySQLi
$conn = new mysqli($host, $username, $password, $dbname);

// Mengecek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Mengecek apakah form telah di-submit
if (isset($_POST['submit'])) {
    // Mengambil input dari form
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // Escaping input pengguna
    $user = $conn->real_escape_string($user);
    $pass = $conn->real_escape_string($pass);

    // Query yang menggunakan input yang sudah di-escape
    $query = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
    $result = $conn->query($query);

    // Mengecek apakah ada user yang sesuai
    if ($result->num_rows > 0) {
        echo "Login Berhasil!";
    } else {
        echo "Login Gagal!";
    }
}

// Menutup koneksi
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h1>Escaping User Input</h1>
    <form action="" method="POST">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required><br>

        <button type="submit" name="submit">Login</button>
    </form>
</body>
</html>
