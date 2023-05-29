/*
Usar un bucle do..while para crear una cadena que contenga letras repetidas. Las letras se entran por teclado y solo podrán ser la X o la Z despues de elegir las letras se le ingresa el número de repeticiones que deberá estar entre 1 y 15.

Si elijo X y luego telco 10 se mostrará XXXXXXXXXX. Si tecleo z me olverá a pedir letra, y sitecelo 20 me volverá a pedir el número
*/

let char = ""
let repeticiones = 0
do{
  char = prompt("Elige caracter (X o Z):")
}while(char != "X" && char != "Z")
do{
  repeticiones = parseInt(prompt("Introduce número del 1 al 15:"))
}while(repeticiones < 1 && repeticiones > 15)
alert(char.repeat(repeticiones))