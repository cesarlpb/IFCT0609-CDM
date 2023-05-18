/*
Triángulo der recto

    *
   **
  ***
 ****
*****

*/

let num = parseInt(prompt("Introduce un número:"))

for(let i=0; i<=num; i++){
  let espacios = num - i
  let chars = i
  console.log("x".repeat(espacios) + "0".repeat(chars))
}
