// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware untuk file statis
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
