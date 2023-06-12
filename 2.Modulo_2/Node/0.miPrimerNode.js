var http = require('http');

http.createServer(function (req, res) {
  console.log("Hola desde consola.")
  // res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
  Hola 
  desde 
  Node :)`);
}).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080/")});