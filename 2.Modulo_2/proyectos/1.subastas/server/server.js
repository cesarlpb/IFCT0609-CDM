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
  http.createServer(function(req, res){
    if(req.url == "/subastas"){
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