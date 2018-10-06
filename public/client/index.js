const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const PORT = 3002;
const HOST = '0.0.0.0';

const app = express();

mongoose.connect('mongodb://192.168.0.105:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models/');

//const Client = mongoose.model('Client');
app.use('/service/', require('./src/routes'));

app.listen(PORT, HOST);