/*
En este script se trata de calcular el máximo común divisor (MCD) de dos números. El algoritmo es simple: 

1. Dividimos el primer por el segundo.

  IF
  - Si el resto es cero este segundo es el MCD
  
  ELSE
  - Si no se desecha el primero y se repite el proceso con el segundo y el resto 
  
  WHILE
  - Así mientras el resto no sea 0


  Casos de prueba:
  Si tecleo 20 y luego 10, el mcd es 10. 
  Si tecleo 4 y luego 20 el mcd será 4.
  Si tecleo 20 y 8 el mcd es 4.
*/

let num1 = parseInt(prompt("Introduce el primer número:"))
let num2 = parseInt(prompt("Introduce el segundo número:"))
const NUM1 = num1 
const NUM2 = num2
let MCD = 1, resto = 0
do{
  resto = num1 % num2
  if(resto == 0){
    MCD = num2
  }else{
    // "Desechamos num1" pasando valor de num2 a num1 y nos quedamos con el resto en num2
    num1 = num2
    num2 = resto
  }
}while(resto != 0)
// NUM1 y NUM2 son los valores originales que el usuario introduce
alert(`MCD(${NUM1}, ${NUM2}) = ${MCD}`)