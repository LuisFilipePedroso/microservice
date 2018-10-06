const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const PORT = 3002;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://192.168.0.105:27017/client', {useNewUrlParser: true});
requireDir('./src/models/');

app.use('/service/', require('./src/routes'));
app.listen(PORT, HOST);