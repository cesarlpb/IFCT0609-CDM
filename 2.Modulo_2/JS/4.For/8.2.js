/*
Rectángulo

Es un - wait for it - rectángulo
*/

let num1 = parseInt(prompt("Introduce un lado:"))
let num2 = parseInt(prompt("Introduce otro lado:"))
let lineas = ""

// En este caso num2 es la base y num1 es la altura del rectángulo
for(let i=1; i<=num1; i++){
  lineas += "🦊".repeat(num2) + " \n"
}
console.log(lineas)