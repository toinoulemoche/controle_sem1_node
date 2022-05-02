const http = require('http');

const server = http.createServer((req,res) => {
	try{
		if(req.method != "GET"){
			res.write('<h1> La méthode ". req.method . "n\'est pas autorisée!</h1>');
			res.end();
		}
		if(req.url === "/"){
			res.write('<h1> HELLO WORLD ANTOINE !</h1>');
		}
		else {
     	 		res.writeHead(404, {'content-type':'text/html'});
      			res.write('<h1>404 Page introuvable</h1>');
      			res.end()
    		}
	} catch (err) {
		res.writeHead(500, {'content-type':'text/html'});
		res.write('<h1></h1>');
	}
	res.end();
});

server.listen(5000);
