/*
Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4

El programa pide 4 veces al usuario que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9"
*/

// En el navegador se puede usar prompt con bucle for

let arr = [5, 9, 10, 12]
let suma = 0
for(let i = 0; i<arr.length; i++){
  // Versión para navegador:
  // let numero = Number(prompt("Introduce una nota:"))
  // suma += numero
  suma += arr[i]
}
let media = suma / arr.length
let mensaje = `La nota media es: ${media}`
console.log(mensaje)