const express = require('express');
const app = express();

app.get('/header', (req, res) => {
  res.send('<h1>Header - Micro Frontend 1</h1>');
});

app.listen(3001, () => {
  console.log('Header micro frontend running on port 3001');
});
