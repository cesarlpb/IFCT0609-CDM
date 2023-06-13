// Script de node para mostrar las salidas de los queries de SQL50
// Cómo usar:
// npm install en esta carpeta
// Pegar el query en la variable query
// node api.js
// Abrir el navegador en localhost:8080/api

const http = require('http');
const mysql = require('mysql');
const url = require('url');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

// Query a ejecutar
const query = "SELECT * FROM leetcode.Employees;";

http.createServer(function (req, res) {
  // Analiza la URL en busca de parámetros
  const parsedUrl = url.parse(req.url, true);
  const queryParams = parsedUrl.query;
  // Accede a los parámetros individualmente
  const param = queryParams?.format || "";

  if (param == "html") {
    con.connect(function(err) {
      if (err) throw err;
      
      con.query(query, function (err, result) {
        if (err) throw err;
        
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        let html = generarHTML(result)
        console.log(html)
        res.write(html);
        res.end();

        con.end(); // Cierra la conexión después de la respuesta
      });
    });
  }
  else if (req.url.startsWith('/api')) {
    con.connect(function(err) {
      if (err) throw err;
      
      con.query(query, function (err, result) {
        if (err) throw err;
        
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(result));
        res.end();

        con.end(); // Cierra la conexión después de la respuesta
      });
    });
  }
}).listen(8080, () => console.log('API endpoint: http://localhost:8080/api'));

function generarHTML(result){
  let html = '<table>';
  html += '<h2>Resultado</h2>'
  html += '<tr>';

  // Leer los campos del primer objeto para generar las cabeceras de la tabla
  for (const field in result[0]) {
    html += '<th>' + field + '</th>';
  }
  html += '</tr>';

  // Leer los objetos y agregar los valores en las celdas de la tabla
  result.forEach(obj => {
    html += '<tr>';
    for (const field in obj) {
      html += '<td>' + obj[field] + '</td>';
    }
    html += '</tr>';
  });

  html += '</table>';
  return html;
}
