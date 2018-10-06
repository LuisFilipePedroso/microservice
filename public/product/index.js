const express = require('express');
const axios = require('axios');

const PORT = 3001;
const HOST = '0.0.0.0';

const app = express();

const url = 'http://192.168.0.105:3002';
axios.get(url)
    .then((response) => {
        console.log(response.data);
    }).catch((err) => {
    console.log(err.message);
});

app.use('/service', require('./src/routes'));
app.listen(PORT, HOST);