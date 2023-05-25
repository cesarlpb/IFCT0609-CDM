/*
Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. El resultado será de la fomra "Los números enteros de 0 a n  suman suma"

Si tecleo el 5 obtendré "Los enteros enteros de 0 a n suman 15" (1+2+3+4+5 ).
*/

// Descomentar si queréis pegar en navegador
// let num = prompt("Introduce un número")
let num = 5
let suma = 0
for(let i=0; i<=num; i++){
  suma += i
}
console.log(suma)
// Descomentar si quieres usar el navegador
// alert(sumar)