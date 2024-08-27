<?php
$host = 'localhost';
$dbname = 'dummy_db';
$username = 'limited_user'; // Akun dengan hak akses terbatas
$password = 'password123';

// Membuat koneksi ke database dengan PDO
try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Mengatur mode error PDO
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Mengecek apakah form telah di-submit
    if (isset($_POST['submit'])) {
        $user = $_POST['username'];
        $pass = $_POST['password'];

        // Validasi input dasar
        if (!empty($user) && !empty($pass)) {
            // Menyiapkan query dengan parameter
            $query = "SELECT * FROM users WHERE username = :username AND password = :password";
            $stmt = $conn->prepare($query);
            
            // Bind parameter
            $stmt->bindParam(':username', $user);
            $stmt->bindParam(':password', $pass);
            
            try {
                $stmt->execute();
                // Mengecek apakah ada user yang sesuai
                if ($stmt->rowCount() > 0) {
                    echo "Login Berhasil!";
                } else {
                    echo "Login Gagal! Username atau password salah.";
                }
            } catch (PDOException $e) {
                // Menangani kesalahan eksekusi query
                error_log("Query Error: " . $e->getMessage()); // Catat kesalahan ke log
                echo "Terjadi kesalahan saat memproses data. Silakan coba lagi nanti.";
            }
        } else {
            echo "Username dan password harus diisi.";
        }
    }
} catch (PDOException $e) {
    // Menangani kesalahan koneksi
    error_log("Database Connection Error: " . $e->getMessage()); // Catat kesalahan ke log
    echo "Terjadi kesalahan saat menghubungkan ke database. Silakan coba lagi nanti.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h1>Error Handling</h1>
    <form action="" method="POST">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required><br>

        <button type="submit" name="submit">Login</button>
    </form>
</body>
</html>
