const express = require('express');
const app = express();

// Simulasi respons untuk micro frontend konten
app.get('/content', (req, res) => {
  res.send('<p>Content - Micro Frontend 2</p>');
});

// Jalankan server di port 3002
app.listen(3002, () => {
  console.log('Content micro frontend running on port 3002');
});
