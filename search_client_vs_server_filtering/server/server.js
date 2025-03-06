const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

// Middleware to allow CORS (Cross-Origin Requests)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Endpoint to get the dataset with filtering
app.get('/data', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading dataset');
    } else {
      let parsedData = JSON.parse(data);
      const searchTerm = req.query.searchTerm;

      // Jika searchTerm ada, filter data
      if (searchTerm) {
        parsedData = parsedData.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      res.send(parsedData); // Kirim data yang sudah difilter
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
