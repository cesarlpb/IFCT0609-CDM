/*
En este script se le pide al usuario que teclee dos números, el script mostrará la suma y pedirá al usuario si queire repetir. Si teclea S repite y si teclea N el programa sale. No acepta otras teclas

Por ejemplo si tecleo 3 despues 9 me dirá que la suma es 12, y luego me preguntará si quiero repetir.

*/

let repetir = ""
do{
  let num1 = Number(prompt("Introduce un número:"))
  let num2 = Number(prompt("Introduce otro número:"))
  alert(num1 + num2)
  repetir = prompt("¿Quieres repetir (S/N)?")
}while(repetir.toUpperCase() != "N")