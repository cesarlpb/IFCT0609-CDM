var http = require('http');

http.createServer(function (req, res) {
  console.log("Hola desde consola.")
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end(`
  <h1>Título 1🦄</h1>
  <h2>Cosas</h2>
  <ul>
    <li>algo 1</li>
    <li>algo 2</li>
    <li>algo 3</li>
  </ul>
  `);
}).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080/")});