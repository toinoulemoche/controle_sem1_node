const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
	try{
		if(req.method != "GET"){
			res.write('<h1> La méthode ". req.method . "n\'est pas autorisée!</h1>');
			res.end();
		}
		if(req.url === "/"){
			res.write(fs.readFileSync(path.join(__dirname, 'public/pages/index.html'), 'utf-8'));
		}
		else {
     	 		res.writeHead(404, {'content-type':'text/html'});
      			res.write('<h1>404 Page introuvable</h1>');
      			res.end()
    		}
	} catch (err) {
		res.writeHead(500, {'content-type':'text/html'});
		res.write('<h1> 500 Erreur interne au serveur! </h1>');
	}
	res.end();
});

server.listen(5000);
