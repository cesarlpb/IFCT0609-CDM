/*
Triángulo der invertido

*****
 ****
  ***
   **
    *

*/

let num = parseInt(prompt("Introduce un número:"))

for(let i=num; i>=0; i--){
  let espacios = num - i
  let chars = i
  console.log(" ".repeat(espacios) + "*".repeat(chars))
}
