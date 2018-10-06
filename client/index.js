const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const PORT = 3002;
const HOST = '0.0.0.0';

const app = express();

mongoose.connect('mongodb://192.168.0.105:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models/');

const Client = mongoose.model('Client');

app.get('/', (req,res) => {
    Client.create({
        name: "Juca",
        address: "Rua Leopoldo da Cunha",
        birth: '1997-09-02',

    });
    return res.send("I'm client!!");
});

app.listen(PORT, HOST);