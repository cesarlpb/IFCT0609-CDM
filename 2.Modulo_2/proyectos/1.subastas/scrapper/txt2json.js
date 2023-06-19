// Referencia: https://www.geeksforgeeks.org/node-js-fs-readfile-method/

// Script que lee un txt y devuelve un JSON  
const fs = require('fs');
const filename = "19-6-2023-15-46-43" // Cambiar nombre al archivo que queremos pasar a JSON

// Leemos el archivo de prueba:
fs.readFile(filename + '.txt', 'utf8', function(err, data){
    let jsonArr = []
    let dataArr = data.split("---")
    // Ignoramos primer y último elementos del arr porque son ""
    for(let i = 1; i<dataArr.length-1; i++){
        let objArr = limpiarTxt(dataArr[i])
        let json = str2json(objArr)
        if(Object.keys(json).length > 0){
            jsonArr.push(json)
        }
    }
    fs.writeFile(filename + ".json", JSON.stringify(jsonArr, null, 2), (err) => {
        if (err)
          console.log(err);
        else {
          console.log(`Archivo '${filename}.json' creado\n`);
        }
      });
});

function limpiarTxt(data){
    let dataArr = data.replaceAll("\r", "").replaceAll("---", "").split("\n")
    let objArr = []
    dataArr.forEach(item => {
        if(item.length > 0 && !item.trim().startsWith('Más...')){
            objArr.push(item.trim())
        }
    })
    return objArr;
}
function str2json(objArr){
    // Creamos el JSON
    let json = {}
    // subastaId
    // 'SUBASTA SUB-JA-2023-209686 (25 lotes)' -> SUB-JA-2023-209686
    let subastaId = objArr[0].split(" ")[1]
    // 'JUZGADO MERCANTIL 3 - MADRID'
    let ubicacion = objArr[1]
    // 'Expediente: 0549/14',
    let expedienteId = objArr[2].split(" ")[1]
    // Estado: Celebrándose - [Conclusión prevista: 03/07/2023 a las 18:00:00]
    let estado = objArr[3].split(' ').slice(1).join(' ');
    // descripción: bucle que agregue todos los strings desde 4 en adelante
    let descripcion = "";
    for(let i = 4; i<objArr.length; i++){
        descripcion += objArr[i]
    }
    // Añadimos todos los campos al json:
    json["subastaId"] = subastaId;
    json["ubicacion"] = ubicacion;
    json["expedienteId"] = expedienteId;
    json["estado"] = estado;
    json["descripcion"] = descripcion;

    return json;
}