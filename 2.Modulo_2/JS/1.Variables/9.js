/**
 * Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.

Tienes que escribir un programa que intercambie el valor de dos variables. 

Al final la primera variable debe tener el valor de la segunda y la segunda el valor de la primera.
*/

let myVar1 = "dato 1"
let myVar2 = "dato 2"
let temp = ""
console.log(myVar1, myVar2)

// Hacemos el cambio
temp = myVar2
myVar2 = myVar1
myVar1 = temp
console.log(myVar1, myVar2)
