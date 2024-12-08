const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let users = [];

// Endpoint to get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Endpoint to add a new user
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

// Endpoint to delete a user by id
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});