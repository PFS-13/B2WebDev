const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dashboard_db',
  password: 'admin', // Ganti dengan password Anda
  port: 5432,
});

// Middleware untuk menangani JSON
app.use(express.json());

// Route untuk mendapatkan data penjualan
app.get('/api/sales', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM sales');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Route default (untuk menghindari error jika ada route yang tidak ditemukan)
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Route untuk menambahkan data penjualan
app.post('/api/sales', async (req, res) => {
  const { date, amount } = req.body;
  try {
    await pool.query('INSERT INTO sales (date, amount) VALUES ($1, $2)', [date, amount]);
    res.status(201).send('Data added successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});