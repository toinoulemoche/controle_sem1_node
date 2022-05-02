const fs = require('fs');
const path = require('path');
const http = require('http');

const server = http.createServer((req,res) => {
	const content = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
	console.log(content);
	res.end();
});

server.listen(5000);
