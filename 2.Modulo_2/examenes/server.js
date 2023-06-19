const mysql = require("mysql")
const http = require("http")

const con = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "examen" // <-- colocad la db correcta
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos " + "examen");
  http.createServer(function(req, res){
    res.end("Node")
  }).listen(8080, () => { console.log("http://localhost:8080")});
});