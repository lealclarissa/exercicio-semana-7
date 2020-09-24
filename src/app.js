const express = require('express');
const app = express();

const index = require('./route/index');
const cities = require('./route/citiesRoute');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada')

    next()
});

app.use('/', index);
app.use('/cities', cities);

module.exports = app;