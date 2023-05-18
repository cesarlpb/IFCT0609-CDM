/*
Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.

Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x
*/

let texto = prompt("Introduce un caracter:")
let num = parseInt(prompt("Introduce un número:"))
let char = texto[0], 
    mensaje = ""
//TODO: Validar los datos
for(let i=1; i<=num; i++){
  mensaje += char
}
alert(mensaje)