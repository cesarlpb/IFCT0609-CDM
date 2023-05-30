/*
Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.

El usuario teclea la sere 4,2,3,5,0, El máximo es 5 y el minimo es 2. Si telcea 2,2,2,0, máximo es 2 y minimo es 2.
*/

let num = -Infinity
let arr = []
while(num != 0){
  num = parseInt(prompt("Introduce un número positivo:"))
  if(num > 0){
    arr.push(num) // Añade el el número al array
  }
}
let min = Math.min(...arr)
let max = Math.max(...arr)
alert(`El mínimo es: ${min}\nEl máximo es: ${max}`)