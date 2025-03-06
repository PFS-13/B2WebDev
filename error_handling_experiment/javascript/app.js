const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Error Handling Experiment!');
});

app.get('/divide/:num', (req, res) => {
    const num = parseInt(req.params.num);
    try {
        if (num === 0) throw new Error('Cannot divide by zero');
        const result = 10 / num;
        res.send(`Result: ${result}`);
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
    }
});

app.use((err, req, res, next) => {
    res.status(500).send(`An error occurred: ${err.message}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
