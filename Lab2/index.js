const http = require('http')
const url = require('url')
const qs = require('querystring')
const content = '<!DOCTYPE html>' +
				'<html>' +
				'    <head>' +
				'        <meta charset="utf-8" />' +
				'        <title>ECE AST</title>' +
				'    </head>' + 
				'    <body>' +
				'       <p>Hello World !</p>' +
				'    </body>' +
				'</html>'

const serverHandle = function (req, res) {
		const route = url.parse(req.url)
		const path = url.parse(req.url).pathname;
		const params = qs.parse(route.query)

		//console.log(path);
		const queryParams = qs.parse(url.parse(req.url).query);
		//console.log(queryParams);
		console.log(params);
		res.writeHead(200, {'Content-Type': 'text/plain'});

  if (path === '/hello' && 'name' in params) {
  	if (params['name']=='Theo') 
  	{
  		res.write("My name is Theo I'm 22 years old and I live in Paris")
  	}
  	else
  	{
  		res.write('Hello ' + params['name'])
  	}
    
  }
   else 
  {
    res.write('404 NOT FOUND')
  }
  
  res.end();
}

const server = http.createServer(serverHandle);
server.listen(8080)