const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/list', (req, res) => {
    res.json({
        message: [1,2,3]
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

