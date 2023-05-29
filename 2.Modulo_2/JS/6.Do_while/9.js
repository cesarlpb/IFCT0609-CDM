/*
Escribir un script usando el bucle do while para pedir que el usuario escriba dos números. Si el primero es mayor que el segundo el programa volverá a pedir que se escriban los números. Si el primero es menor o igual que el segundo el programa acaba y dice "Numeros en orden creciente"
*/

let num1, num2;
do{
  num1 = parseInt(prompt("Introduce el primer número:"))
  num2 = parseInt(prompt("Introduce el segundo número:"))
}while(num1 >= num2)
// Este if es opcional:
if(num2 > num1){
  alert(`${num1} es menor que ${num2}`)
}