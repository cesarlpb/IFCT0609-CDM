var http = require('http');

http.createServer(function (req, res) {
  console.log("Hola desde consola.")
  res.end(`
  Hola 
  desde 
  Node :)`);
}).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080/")});