const express = require('express');
const app = express();
const PORT = 4000;

app.get('/weather', (req, res) => {
    res.json({ weather: "Sunny", temp: "30°C" });
});

app.get('/health', (req, res) => {
    res.json({ status: "UP" });
});

app.listen(PORT, () => {
    console.log(`Node.js API running at http://localhost:${PORT}`);
});
