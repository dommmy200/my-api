const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// Example: GET all items
app.get('/api/items', (req, res) => {
    res.json([
        {id: 1, name: "Book"},
        {id: 2, name: "Laptop"},
        {id: 3, name: "Calculator"},
    ]);
});

// Example: POST create items
app.post('/api/items', (req, res) => {
    const newitem = req.body;
    res.status(201).json({
        message: "Item created successfully",
        item: newitem,
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});