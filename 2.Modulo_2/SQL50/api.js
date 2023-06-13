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
  password: "",
  database: "db" // <--- Colocad la base de datos que usáis
});

// Query a ejecutar
const query = `SELECT s.student_id, s.student_name, COUNT(e.subject_name) AS attended_exams
FROM Students s CROSS JOIN Subjects 
LEFT JOIN Examinations e
ON s.student_id = e.student_id AND Subjects.subject_name = e.subject_name
GROUP BY s.student_id, s.student_name, Subjects.subject_name
ORDER BY s.student_id, Subjects.subject_name;`;

// Conecta a la base de datos
con.connect(function(err) {
  if (err) throw err;
  
  // Crea el servidor HTTP
  http.createServer(function (req, res) {
    // Analiza la URL en busca de parámetros
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    // Accede a los parámetros individualmente
    const param = queryParams?.format || "";

    if (param == "html") {
      con.query(query, function (err, result) {
        if (err) throw err;
        
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        let html = generarHTML(result)
        console.log(html)
        res.write(html);
        res.end();
      });
    }
    else if (req.url.startsWith('/api')) {
      con.query(query, function (err, result) {
        if (err) throw err;
        
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(result));
        res.end();
      });
    }
  }).listen(8080, () => console.log('API endpoint: http://localhost:8080/api'));
});

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
