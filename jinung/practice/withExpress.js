const http = require('http');
const express = require('express');
const { sendPosts } = require('./sendPosts');

const app = express();

app.get('/', (req, res) => {
	res.json({ message: '/ endpoint' });
});

app.post('/signup', (req, res) => {
	res.json({ message: '회원가입 완료!' }); // 첫번째 인자에는 endpoint url 을 기입하고,
});
app.get('/products', sendPosts); // 각각의 요청에 대해 핸들링 하는 함수를 두번째 인자로 넣습니다.

const server = http.createServer(app);

server.listen(8000, () => {
	console.log('server is listening on PORT 8000');
});
