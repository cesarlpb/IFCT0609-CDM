const mysql = require("mysql")
const http = require("http")

const con = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "pruebas" // <-- colocad la db correcta
});

// Queries
const selectAll = "SELECT * FROM tblUsuarios LIMIT 10;";
const selectOne = "SELECT * FROM tblUsuarios WHERE idx = ?;";
const postQuery = "INSERT INTO tblUsuarios (idx, usuario, nombre, sexo, nivel, email, telefono, marca, compañia, saldo, activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

con.connect(function(err) {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos " + con.config.database);
  http.createServer(function(req, res){
    let id = req.url.split("/")[2]
    if(req.url.startsWith("/usuarios") && !id && req.method == "GET"){
      res.end("GET")
      /* Escribe aquí la lógica del endpoint */ 
    }else if(req.url.startsWith("/usuarios/") && id && req.method == "GET"){
      res.end("GET por id")
      /* Escribe aquí la lógica del endpoint */ 
    }else if(req.url.startsWith("/usuarios") && !id && req.method == "POST"){
      res.end("POST")
      /* Escribe aquí la lógica del endpoint */ 
    }
    // --- No entra en examen del 21-06: --- //
    // else if(req.method == "PUT"){
    //   res.end("PUT. Coming soon in best repos.🐱‍👤")
    // }else if(req.method == "DELETE"){
    //   res.end("DELETE. Coming soon in best repos.🐱‍👤")
    // }
    // --- No entra en examen del 21-06 ^^^ --- // 
    else{
      res.writeHead(400)
      res.end("Bad Request")
    }
  }).listen(8080, () => { 
    console.log("GET de lista: http://localhost:8080/usuarios")
    console.log("GET por id: http://localhost:8080/usuarios/1")
    console.log("POST por id: http://localhost:8080/usuarios")
    // No entra en examen del 21-06:
    // console.log("PUT por id: http://localhost:8080/usuarios/1")
    // console.log("DELETE por id: http://localhost:8080/usuarios/1")
  });
});