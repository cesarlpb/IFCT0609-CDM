/*
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.
*/

// Number(), parseFloat(), parseInt()

let num1 = Number(prompt("Introduce el primer número:"))
let num2 = Number(prompt("Introduce el segundo número:"))
let num3 = Number(prompt("Introduce el tercer número:"))
let media = (num1 + num2 + num3)/3
alert(media.toFixed(2))

