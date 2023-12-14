const express = require('express');
const path = require('path'); // Node.js module for working with file paths

const app = express();
app.set("port", process.env.PORT || 5000);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(app.get("port"), function () {
    console.log("Node app is running at localhost:" + app.get("port"));
  });