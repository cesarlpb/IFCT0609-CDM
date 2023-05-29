/*
Este ejemplo debe pedir al usuario un  número entero y, mediante sucesivas divisiones por 10 debe escribir los digitos que lo forman de menor a mayor orden (de unidades hacia arriba) en una cadena separados por un espacio
*/

let num = parseInt(prompt("Introduce un número a descomponer en dígitos:"))
let mensaje = ""
do{
  let digito = num % 10
  num = parseInt(num / 10)
  mensaje += digito + " "
}while(num > 0)
alert(mensaje) // orden -> U D C
// Si queremos colocar el orden C D U:
// alert(mensaje.split("").reverse().join(""))

// Método 2 sin bucle:
// let centenas = Math.parseInt((num / 10) / 10) // unidades de cien
// let decenas = Math.round((num - centenas*10*10)/10)
// let unidades = num - centenas * 10*10 - decenas*10
// alert(centenas + decenas + unidades)