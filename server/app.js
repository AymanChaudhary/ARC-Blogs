const express = require('express');
const app = express();
require('dotenv').config();
require('./conn/conn');

app.get('/', (req, res) => {
    res.send('Hello From server side!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});