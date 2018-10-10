const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const PORT = 3003;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

//Conectando com o MongoDB;
mongoose.connect('mongodb://192.168.0.105:27017/users', { useNewUrlParser: true });

requireDir('./src/models');

//Requiring route file;
app.use('/service/', require('./src/routes'));

//Creating the server
app.listen(PORT,HOST);

