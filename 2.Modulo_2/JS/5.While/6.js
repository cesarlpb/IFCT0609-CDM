/*
En este script se pedirá al usuario que teclee un número cada vez. El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.

El usuario teclea primero el 4 luego el 5 depsués 6 y finalmente , 0. El programa se para y muestra "La suma de todos los número es 15"
*/

let num = NaN // Iniciamos el num como Not a Number para que podamos entrar en el bucle while
let suma = 0
while(num != 0){
  num = parseInt(prompt("Introduce un número:"))
  if(!isNaN(num)){
    suma += num
  }
}
alert(suma)