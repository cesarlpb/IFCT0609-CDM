const mysql = require("mysql")
const http = require("http")

const con = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "db" // <-- colocad la db correcta
});

// Queries
const selectAll = "SELECT * FROM tblUsuarios LIMIT 10;";
const selectOne = "SELECT * FROM tblUsuarios WHERE idx = ?;";
const postQuery = "INSERT INTO tblUsuarios (idx, usuario, nombre, sexo, nivel, email, telefono, marca, compañia, saldo, activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

con.connect(function(err) {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos " + "examen");
  http.createServer(function(req, res){
    let id = req.url.split("/")[2]
    if(req.url.startsWith("/usuarios") && !id && req.method == "GET"){
      con.query(selectAll, function (err, result) {
        if (err) throw err;
        console.log("Lista de datos")
        res.writeHead(200, {"Content-type" : "application/json; charset = UTF-8;"})
        res.end(JSON.stringify(result, null, 2))
      })
    }else if(req.url.startsWith("/usuarios/") && id && req.method == "GET"){
      con.query(
        selectOne, 
        [id],
        function (err, result) {
        if (err) throw err;
        console.log("Un dato")
        res.writeHead(200, {"Content-type" : "application/json; charset = UTF-8;"})
        res.end(JSON.stringify(result, null, 2))
      })
    }else if(req.url.startsWith("/usuarios") && !id && req.method == "POST"){
      let jsonString = ""
      req.on('data', function (data) {
        jsonString += data;
      });
      req.on('end', function () {
        json = JSON.parse(jsonString);
        let idx = json.idx;
        let usuario = json.usuario;
        let nombre = json.nombre;
        let sexo = json.sexo;
        let nivel = json.nivel;
        let email = json.email;
        let telefono = json.telefono;
        let marca = json.marca;
        let compañia = json.compañia;
        let saldo = json.saldo;
        let activo = json.activo;
        con.query(
          postQuery, 
          [idx, usuario, nombre, sexo, nivel, email, telefono, marca, compañia, saldo, activo], 
          function (err, result) {
            if (err) throw err;
            console.log("Se ha creado " + result.affectedRows + " dato con id " + result.insertId)
            res.writeHead(201, {"Content-type" : "application/json; charset = UTF-8;"})
            res.end()
          })
        })
    }else if(req.method == "PUT"){
      // --- No entra en el examen del 21-06: ---
      res.end("PUT. Coming soon in best repos.🐱‍👤")
    }else if(req.method == "DELETE"){
      // --- No entra en el examen del 21-06: ---
      res.end("DELETE. Coming soon in best repos.🐱‍👤")
    }
    else{
      res.writeHead(400)
      res.end("Bad Request")
    }
  }).listen(8080, () => { 
    console.log("GET de lista: http://localhost:8080/usuarios")
    console.log("GET por id: http://localhost:8080/usuarios/1")
    console.log("POST por id: http://localhost:8080/usuarios")
    // --- No entra en el examen del 21-06: ---
    // console.log("PUT por id: http://localhost:8080/usuarios/1")
    // console.log("DELETE por id: http://localhost:8080/usuarios/1")
  });
});