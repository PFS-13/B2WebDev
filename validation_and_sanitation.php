<?php
$host = 'localhost';
$dbname = 'dummy_db';
$username = 'root';
$password = '';

// Membuat koneksi ke database dengan PDO
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

// Mengatur mode error PDO
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Mengecek apakah form telah di-submit
if (isset($_POST['submit'])) {
    // Mengambil input dari form
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // Validasi input
    if (preg_match('/^[a-zA-Z0-9_]{1,50}$/', $user) && preg_match('/^[a-zA-Z0-9_]{1,50}$/', $pass)) {
        // Sanitasi input
        $user = filter_var($user, FILTER_SANITIZE_STRING);
        $pass = filter_var($pass, FILTER_SANITIZE_STRING);

        // Menyiapkan query dengan parameter
        $query = "SELECT * FROM users WHERE username = :username AND password = :password";
        $stmt = $conn->prepare($query);
        
        // Bind parameter
        $stmt->bindParam(':username', $user);
        $stmt->bindParam(':password', $pass);
        $stmt->execute();

        // Mengecek apakah ada user yang sesuai
        if ($stmt->rowCount() > 0) {
            echo "Login Berhasil!";
        } else {
            echo "Login Gagal!";
        }
    } else {
        echo "Input tidak valid!";
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
    <h1>Validation and Sanitation</h1>
    <form action="" method="POST">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required><br>

        <button type="submit" name="submit">Login</button>
    </form>
    <!-- 
    Username: admin
    Password: ' OR '1'='1' 
    -->
</body>
</html>
