const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Group 37 Final About.html'));
});

// Additional routes for other pages
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Group 37 Final Help.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Group 37 Final Home.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
