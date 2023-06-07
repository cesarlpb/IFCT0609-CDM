/*
Diseña un script que vaya leyendo números y guardándolos en un array. 

Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. 

La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.

Intenta resolverlo sin usar métodos del objeto array, solo indices y longitudes de arrays.

No debe aceptar valores no numéricos (isNaN(valor) permite detectar valores no numéricos).

Por ejemplo si tecleo: 3,5,4,6,7,8, 11 el script me dirá que el array de entrada es [3,5,4,6,7,8, 11] y que hay 3 pares y 4 impares.
*/

let num, arr = [], pares = 0, impares = 0;
do{
  num = parseInt(prompt("Introduce un número entero:"))
  if(!isNaN(num) && num != 0){
    if(num % 2 == 0){ pares++ }
    else { impares++ }
    arr.push(num)
  }
}while(num != 0)
alert(`
  ${arr}
  pares: ${pares}
  impares: ${impares}
`)