const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

let clients = [];
let notifications = [];

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  clients.push(res);

  req.on('close', () => {
    clients = clients.filter(client => client !== res);
  });
});

app.post('/notify', (req, res) => {
  const { message } = req.body;
  const notification = {
    message,
    timestamp: new Date().toISOString()
  };
  notifications.push(notification);

  // Broadcast notification to all clients
  clients.forEach(client => {
    client.write(`data: ${JSON.stringify(notification)}\n\n`);
  });

  res.status(200).send('Notification sent');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
