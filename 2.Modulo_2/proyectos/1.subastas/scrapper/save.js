const mysql = require("mysql");
const fs = require("fs");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "proyectos"
});

createTableQuery = `
CREATE TABLE IF NOT EXISTS Subastas (
  subastasId SMALLINT NOT NULL AUTO_INCREMENT , 
  ubicacion VARCHAR(255) NOT NULL , 
  expedienteId VARCHAR(255) NOT NULL , 
  estado VARCHAR(255) NOT NULL , 
  descripcion VARCHAR(65535) NULL , 
  PRIMARY KEY (subastasId)) ENGINE = InnoDB;
`;

con.connect(function(err) {
  if (err) throw err;
  // Crear tabla si no existe
  con.query(createTableQuery, function (err, result) {
    if (err) throw err;
    console.log("Tabla Subastas creada")
  });
  fs.readFile('data.json', 'utf8', function(err, data){
    if (err) throw err;
    console.log(data)
    let arr = JSON.parse(data) // Transformamos texto en objeto JSON
    for(let indice in arr){
      let obj = arr[indice]
      let insertQuery = `
      INSERT INTO Subastas 
      (subastasId, ubicacion, expedienteId, estado, descripcion)
      VALUES
      (
        NULL,
        ?, ?, ?, ?
      )`.replaceAll("\n", "");
      con.query(
        insertQuery, 
        [obj.ubicacion,obj.expedienteId, obj.estado,obj.descripcion],
        function (err, result) {
        if (err) throw err;
        console.log(`fila con id ${result.insertId} insertada`);
      });
    }
  })
});