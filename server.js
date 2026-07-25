const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the directory so it can access index.html
app.use(express.static(path.join(__dirname)));

// Route all traffic to the main portal file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`MD CREATIONS Portal is live and running on port ${PORT}`);
});