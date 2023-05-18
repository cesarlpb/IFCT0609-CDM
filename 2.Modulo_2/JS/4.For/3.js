/*
Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').

Si tecleo el número el número 9 deberá mostrar cinco lineas con los números 0 2 4 6 8
*/

let num = parseInt(prompt("Introduce un número:"))
let mensaje = ""
for(let i=0; i<num; i+=2){
  mensaje += i + "\n" 
}
alert(mensaje)