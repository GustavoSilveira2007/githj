const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
app.set('port', process.env.PORT || 3010);
module.exports = app;
const router = require('./routes/rotas');
app.use('/api', router);
