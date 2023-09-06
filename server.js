const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const app = express();

// Enable cors for all routes
app.use(cors());

// Serve React app build files
app.use(express.static(path.join(__dirname, 'build')));

// Set up JSON Server for the /api route
app.use('/api', jsonServer.router('db.json'));

// Handle requests that don't match any routes by sending the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Use port 80 for HTTP
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


