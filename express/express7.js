const express = require('express');

const app = express();
app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    const output = `
        <h2>express로 웹 만들기</h2>
        <p>메인 페이지입니다.</p>
        <img src= "../public/cat.jpg" width="400px" height="200px"/>
        `
    res.send(output);
});

app.get('/user/:id', (req, res) => {
    res.send(req.params.id + "님의 개인 페이지입니다.");
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중...')
});