const http = require('http')

http.createServer(function(req, res){
  res.end("Servidor")
}).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080")})