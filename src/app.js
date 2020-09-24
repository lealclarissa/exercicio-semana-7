const express = require('express');
const app = express();

const index = require('./route/index');
const movies = require('./route/moviesRoute');

app.use((req, res, next) => {
    console.log('Nova requisicao realizada')

    next()
});

app.use('/', index);
app.use('/movies', movies);

module.exports = app;