const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

const sql = "SELECT * FROM pruebas.tblUsuarios;";
const sql2 = "SELECT * FROM pruebas.tblUsuarios WHERE idx = 2;";

con.connect(function(err) {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos");
});

con.query(sql, function (err, result) {
  if (err) throw err;
  const json = JSON.parse(JSON.stringify(result, null, 2));
  console.log("Query 1:")
  console.log(json[0]);
});

con.query(sql2, function (err, result) {
  if (err) throw err;
  const json = JSON.parse(JSON.stringify(result, null, 2));
  console.log("Query 2:")
  console.log(json);
});
 
con.end();