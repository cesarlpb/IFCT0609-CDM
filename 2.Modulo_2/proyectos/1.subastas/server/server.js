const http = require('http')

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "proyectos"
});

const selectQuery = "SELECT * From Subastas;"

con.connect(function(err) {
  if (err) throw err;
  const allowedIP = ['127.0.0.1', '::1']; // Dirección IP permitida (cambia según tu configuración)
  http.createServer(function(req, res){
    // Obtener la dirección IP del cliente desde la solicitud
    const clientIP = req.socket.remoteAddress;
    console.log(clientIP)
    // Establecer las cabeceras CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if(req.url == "/subastas" && allowedIP.includes(clientIP)){
      con.query(selectQuery, function (err, result) {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "application/json; charset = UTF-8"})
        res.end(JSON.stringify(result, null, 2))
      });
    }else{
      res.writeHead(400, {"Content-Type": "text/html; charset = UTF-8;"})
      res.end("<h1>Error 400. Bad Request</h1>")
    }
  }).listen(8080, () => { console.log("Servidor en ejecución en http://localhost:8080/subastas")})
})