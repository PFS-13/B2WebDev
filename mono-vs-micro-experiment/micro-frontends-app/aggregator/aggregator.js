const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Proxy untuk layanan header
app.use('/header', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

// Proxy untuk layanan konten
app.use('/content', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

// Halaman utama yang menggabungkan micro frontends
app.get('/', (req, res) => {
  res.send(`
    <div>
      <div id="header"></div>
      <div id="content"></div>
      <script>
        fetch('/header').then(res => res.text()).then(html => {
          document.getElementById('header').innerHTML = html;
        });
        fetch('/content').then(res => res.text()).then(html => {
          document.getElementById('content').innerHTML = html;
        });
      </script>
    </div>
  `);
});

// Jalankan server di port 3000
app.listen(3000, () => {
  console.log('Aggregator running on port 3000');
});
