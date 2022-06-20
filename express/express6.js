const express = require('express');
const static = require('serve-static');

const app = express();
app.set('port', process.env.PORT || 8080);

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
});

app.listen(app.get('port'), () => {
   console.log(app.get('port'), '번 포트에서 서버 실행 중...')
});