const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
	try{
		if(req.method != "GET"){
			res.write('<h1> La méthode ". req.method . "n\'est pas autorisée!</h1>');
			res.end()
		}
		else if(req.url === "/"){
			res.write(fs.readFileSync(path.join(__dirname, 'public/pages/index.html'), 'utf-8'));
		}
		else if(req.url === "/img"){
			res.write(fs.readFileSync(path.join(__dirname, 'public/pages/affiche_image.html'), 'utf-8'));
		}
		else {
     	 		res.write(fs.readFileSync(path.join(__dirname, 'public/pages/404.html'), 'utf-8'));
      			res.end()
    		}
	} catch (err) {
		res.writeHead(500, {'content-type':'text/html'});
		res.write('<h1> 500 Erreur interne au serveur! </h1>');
	}
	res.end();
});

server.listen(5000);
