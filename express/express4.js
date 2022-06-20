const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
    res.send('Hello');
    next();
});

const myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

app.use(myLogger);

app.listen(8080);