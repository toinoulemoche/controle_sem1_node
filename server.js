const http = require('http');

const server = http.createServer((req,res) => {
	if(req.url === "/"){
		res.write('<h1> HELLO WORLD ANTOINE !</h1>');
	}
	res.end();
});

server.listen(5000);
