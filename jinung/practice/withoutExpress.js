const http = require('http');
const { sendPosts } = require('./sendPosts');

const server = http.createServer((request, response) => {
	const { url, method } = request;
	response.setHeader('Content-Type', 'application/json');

	if (url === '/') return response.end(JSON.stringify({ message: '/endpoint' }));
	if (url === '/signup' && method === 'POST') return response.end(JSON.stringify({ message: '회원가입 완료' }));
	if (url === '/login' && method === 'POST') return response.end(JSON.stringify({ message: '로그인 완료' }));
	if (url === '/products' && method === 'GET') return sendPosts(response);

	response.send(JSON.stringify({ message: 'this response answers to every request' }));
});
server.listen(8000, () => {
	console.log('server is running on PORT 8000');
});
