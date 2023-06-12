var http = require('http');

http.createServer(function (req, res) {
  console.log("Hola desde consola.")
  res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
  res.end(`
  <h1>Título 1🦄</h1>
  `);
}).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080/")});