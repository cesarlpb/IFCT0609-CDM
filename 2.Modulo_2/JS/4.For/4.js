/*
Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

Recuerda que el salto de linea es el carácter "\n"

Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma

4 x 1 = 4
4 x 2 = 8
...
4 x 10 = 40
*/

let num = parseInt(prompt("Introduce un número:"))
// TODO: validar que sea número entero positivo
let lineas = ""
for(let i = 1; i<11; i++){
  // TODO: rehacer con string interpolado 
  lineas += num + " x " + i + "\t= " + (num*i) + "\n" 
}
// Observación: \t no aparece correctamente en alert
console.log(lineas)