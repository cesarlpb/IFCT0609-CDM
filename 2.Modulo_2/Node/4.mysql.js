const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

const sql = "SELECT * FROM pruebas.tblUsuarios;";

con.connect(function(err) {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos");
});

con.query(sql, function (err, result) {
  if (err) throw err;
  const json = JSON.parse(JSON.stringify(result, null, 2));
  console.log(json[0]);
});
 
con.end();