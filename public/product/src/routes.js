const express = require('express');
const routes = express.Router();
const axios = require('axios');

const url = 'http://192.168.0.105:3002/service/clients';

routes.get('/products',(req, res) => {
    axios.get(url)
        .then((response) => {
            return res.send(response.data);
        }).catch((err) => {
            return res.send(err.message);
    });
});

module.exports = routes;