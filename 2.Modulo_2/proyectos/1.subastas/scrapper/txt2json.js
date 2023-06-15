// Referencia: https://www.geeksforgeeks.org/node-js-fs-readfile-method/

// Script que lee un txt y devuelve un JSON  
const fs = require('fs');
  
// Leemos el archivo de prueba:
fs.readFile('2.txt', 'utf8', function(err, data){
    let dataArr = data.replaceAll("\r", "").replaceAll("---", "").split("\n")
    let objArr = []
    dataArr.forEach(item => {
        if(item.length > 0 && !item.trim().startsWith('Más...')){
            objArr.push(item.trim())
        }
    })
    console.log(objArr);
});