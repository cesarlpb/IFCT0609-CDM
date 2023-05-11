/*
El usuario debe introducir dos valores numéricos por teclado y la aplicación deberá indicar cual es el mayor, el primero o el segundo.

La idea es usar las sentencias if reducidas (cond ? true:false)

*/

let num1 = Number(prompt("Introduce el primer número:"))
let num2 = Number(prompt("Introduce el segundo número:"))

// TODO: validar que no sean NaN

// Método 1: usamos if - else if - else
// if(num1 > num2){
//     alert(num1 + " es mayor")
// }else if(num2 > num1){
//     alert(num2 + " es mayor")
// }else{
//     alert("Son iguales")
// }

// Método 2: ternario
let mensaje = num2 > num1 
            ? num2 + " es mayor" 
            : num1 + " es mayor o igual"
alert(mensaje)