/*
Este script usará un bucle do while para determinar si un número es primo o no. El numero tecleado deberá estar entre 0 y 100. Si es primo lo mostrará en una ventana alert
*/

// Idea: https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript

let num = parseInt(prompt("Introduce un número entero:"))
let divisor = 2
let raiz = Math.sqrt(num) // Se basa en un teorema: https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-number-to-determine-if-the-number-is
let esPrimo = true
do{
  if(num>2){
    esPrimo = num % divisor != 0
    divisor++
  }
}while(esPrimo && divisor <= raiz)
alert("El número es primo? " + esPrimo)