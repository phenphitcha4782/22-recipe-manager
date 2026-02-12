const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <h1>Recipe API</h1>
        <p><a href="/recipes">View Recipes</a></p>
        <p><a href="/recipes/details">View Details</a></p>
    `);
});

app.get('/recipes', (req, res) => {
    res.json(['Pancakes', 'Omelette']);
});

app.get('/recipes/details', (req, res) => {
    res.json({ ingredients: ['flour', 'milk', 'eggs'] });
});

app.post('/recipes/filter', (req, res) => {
    res.json(['Pancakes']);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
