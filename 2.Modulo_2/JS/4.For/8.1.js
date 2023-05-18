/*
Cuadrado

Es un cuadrado
*/

let num = parseInt(prompt("Introduce un número:"))
let lineas = ""
for(let i=1; i<=num; i++){
  lineas += "🐱‍👤".repeat(num) + " \n"
}
console.log(lineas)