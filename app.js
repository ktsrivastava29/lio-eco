const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cartRoutes = require('./routes/cartRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

mongoose.connect('mongodb://localhost:27017/lio_ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/api', cartRoutes);

app.use(errorHandler);

module.exports = app;
