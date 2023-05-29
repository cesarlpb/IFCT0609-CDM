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

const NUM1 = parseInt(prompt("Introduce el primer número:"))
const NUM2 = parseInt(prompt("Introduce el segundo número:"))
// Reasignamos valores por claridad
let [dividendo, divisor] = [NUM1, NUM2]
let MCD = 1, resto = 0
do{
  resto = dividendo % divisor
  if(resto == 0){
    MCD = divisor
  }else{
    // "Desechamos num1" pasando valor de num2 a num1 y nos quedamos con el resto en num2
    dividendo = divisor;
    divisor = resto;
  }
}while(resto != 0)
// NUM1 y NUM2 son los valores originales que el usuario introduce
alert(`MCD(${NUM1}, ${NUM2}) = ${MCD}`)

// TODO: Calcular el mcm
// num1 * num2 = MCD(num1, num2) * mcm(num1, num2)
// Más info: https://www.geeksforgeeks.org/mathematical-algorithms/mathematical-algorithms-gcd-lcm/
