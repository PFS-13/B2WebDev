const express = require('express');
const app = express();
app.use(express.json()); // Untuk parsing request body JSON

let users = []; // Simpan data pengguna sementara dalam array

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 menit
    max: 5, // maksimal 5 permintaan per menit
    message: 'Too many requests, please try again later.' // Pesan jika melebihi batas
});

// Terapkan rate limiting pada semua rute yang dimulai dengan /users
app.use('/users', limiter);

// Ambil semua pengguna
app.get('/users', authenticateToken, (req, res) => {
    res.json(users);
});

// Tambah pengguna baru
app.post('/users', (req, res) => {
    const user = req.body; // Ambil data pengguna dari request body
    users.push(user); // Tambahkan pengguna ke array
    res.status(201).json(user); // Respon dengan pengguna baru
});

// Update pengguna berdasarkan id
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    users[id] = user; // Update data pengguna
    res.json(user); // Respon dengan pengguna yang diperbarui
});

// Hapus pengguna berdasarkan id
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    users.splice(id, 1); // Hapus pengguna dari array
    res.status(204).send(); // Tidak ada konten yang dikembalikan
});

// Menjalankan server pada port 3000
app.listen(3000, () => console.log('Server running on port 3000'));


// RUTE LOGIN
const jwt = require('jsonwebtoken');
const secretKey = 'mySecretKey'; // Kunci rahasia untuk JWT

// Login dan dapatkan token JWT
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validasi kredensial (contoh sederhana)
    if (username === 'admin' && password === '1234') {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        res.json({ token }); // Kirim token ke klien
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Middleware untuk verifikasi token JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']; // Ambil token dari header Authorization
    if (!token) return res.status(403).json({ message: 'No token provided' });

    const bearerToken = token.split(' ')[1];

    jwt.verify(bearerToken, secretKey, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user; // Simpan data pengguna dari token
        next(); // Lanjutkan ke rute berikutnya
    });
}
