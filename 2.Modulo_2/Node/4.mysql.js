const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

const readAll = "SELECT * FROM pruebas.tblUsuarios;";
const readOne = function (id){
  return `SELECT * FROM pruebas.tblUsuarios WHERE idx = ${id};`;
}

con.connect(function(err) {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos");
});

con.query(readAll, function (err, result) {
  if (err) throw err;
  const json = JSON.parse(JSON.stringify(result, null, 2));
  console.log("Query 1:")
  console.log(json[0]);
});

con.query(readOne(2), function (err, result) {
  if (err) throw err;
  const json = JSON.parse(JSON.stringify(result, null, 2));
  console.log("Query 2:")
  console.log(json);
});
 
// Query para escribir los usuarios con ids del 3 al 7

// Query para escribir usuarios con móvil marca LG

// Query para actualizar un campo de un usuario

con.end();