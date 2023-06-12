var http = require('http');

http.createServer(function (req, res) {
  console.log("Hola desde consola.")
  res.writeHead(200, {'Content-Type': 'application/json; charset=UTF-8'});
  let jsonStr = `{"id": 1,
      "todo": "Do something nice for someone I care about",
      "completed": true,
      "userId": 26}`
  let json = JSON.parse(jsonStr)
  res.end(JSON.stringify(json, null, 2));
}).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080/")});