/*
En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.

Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.

Por ejemplo si tecleas el 14, obtendré la lista 2, 5, 8 y 11
*/

let num = parseInt(prompt("Introduce un número:"))
let mensaje = ""
// Método 1: sin usar operador %
/*
for(let i=2; i<num; i+=3){
  mensaje += i + ", "
}
*/
// Método 2: usamos %
for(let i=0; i<num; i++){
  if(i%3 == 2){
    mensaje += i + ", "
  }
}
alert(mensaje.slice(0,-2))