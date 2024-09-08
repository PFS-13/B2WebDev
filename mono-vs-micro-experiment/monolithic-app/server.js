const express = require('express');
const app = express();

// Simulasi response untuk request
app.get('/', (req, res) => {
  res.send('Hello from Monolithic Application');
});

// Jalankan server di port 3000
app.listen(3000, () => {
  console.log('Monolithic app running on port 3000');
});
