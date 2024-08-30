
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// Route for home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
