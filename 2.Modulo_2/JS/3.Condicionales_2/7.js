/*
En este ejercicio el usuario entra la longitud de la base y el alto de un cuadrado. 
Si la base y el alto son idénticos la respuesta será "Es un cuadrado", si la base es mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".
*/

// TODO: rehacer con ternario o con switch (?)

let base = Number(prompt("Introduce la base:"))
let altura = Number(prompt("Introduce la altura:"))

// TODO: validar que no sean NaN

if(base == altura){
    alert("Es un cuadrado de lado: " + base)
}else if(base > altura){
    alert("Es un rectángulo horizontal")
}else{
    alert("Es un rectángulo vertical")
}