const express = require('express');
const routes = express.Routes();

routes.get('/',(req,res) => {
    return res.send('Ola');
});

module.exports = routes;