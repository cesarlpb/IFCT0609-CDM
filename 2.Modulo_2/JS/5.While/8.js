/*
Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo números pares, en caso de que teclee un número impar el programa acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).
Muestra Si escribo 2,8,12,1 el script me dirá "Ha escrito 3 números pares")
*/
let pares = 0, impares = 0
while(impares == 0){
  let num = parseInt(prompt("Introduce un número:"))
  if(num % 2 == 0){
    pares++
  }else{
    impares++
  }
}
alert(pares)