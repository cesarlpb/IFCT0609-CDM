const mysql = require("mysql")
const http = require("http")

const con = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "examen" // <-- colocad la db correcta
});

// Queries
const selectAll = "SELECT * FROM tblUsuarios LIMIT 10;";
const selectOne = "SELECT * FROM tblUsuarios WHERE idx = ?;";

con.connect(function(err) {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos " + "examen");
  http.createServer(function(req, res){
    let id = req.url.split("/")[2]
    if(req.url.startsWith("/usuarios") && !id){
      con.query(selectAll, function (err, result) {
        if (err) throw err;
        console.log("Lista de datos")
        res.writeHead(200, {"Content-type" : "application/json; charset = UTF-8;"})
        res.end(JSON.stringify(result, null, 2))
      })
    }else if(req.url.startsWith("/usuarios/") && id){
      con.query(
        selectOne, 
        [id],
        function (err, result) {
        if (err) throw err;
        console.log("Un dato")
        res.writeHead(200, {"Content-type" : "application/json; charset = UTF-8;"})
        res.end(JSON.stringify(result, null, 2))
      })
    }else{
      res.writeHead(400)
      res.end("Bad Request")
    }
  }).listen(8080, () => { console.log("http://localhost:8080")});
});