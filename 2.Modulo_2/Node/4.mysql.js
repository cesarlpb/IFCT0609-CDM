// Importamos mysql
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
const readBetween = function(from, to){
  return `SELECT * FROM pruebas.tblUsuarios WHERE idx >= ${from} AND idx <= ${to};`;
}
const queryMarca = function(marca){
  return `SELECT * FROM pruebas.tblUsuarios WHERE marca = '${marca}'`;
}
const queryUpdate = function(idx, campo, valor){
  return `UPDATE pruebas.tblusuarios SET ${campo} = '${valor}' WHERE tblusuarios.idx = '${idx}';`;
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
con.query(readBetween(3, 7), function (err, result) {
  if (err) throw err;
  const json = JSON.parse(JSON.stringify(result, null, 2));
  console.log("Query 3:")
  console.log(json);
});
// Query para escribir usuarios con móvil marca LG
con.query(queryMarca("LG"), function (err, result) {
  if (err) throw err;
  const json = JSON.parse(JSON.stringify(result, null, 2));
  console.log("Query 4:")
  console.log(json);
});
// Query para actualizar un campo de un usuario
con.query(queryUpdate(1, "nombre", "pepe"), function (err, result) {
  if (err) throw err;
  const json = JSON.parse(JSON.stringify(result, null, 2));
  console.log("Query 5:")
  console.log(json);
});
con.end();