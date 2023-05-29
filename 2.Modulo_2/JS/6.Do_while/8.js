/*
Diseñar un script que pida un número mayor que cero y devuelva la suma de todos los números pares desde cero al número introducido. Mostrará la suma y volverá a pedir otro núero hasta que el usuario teclee un 0.

Si tecleo el 10 mostrará 30 la suma de 
0+2+4+6+8+10 = 30
*/

let num = parseInt(prompt("Introduce un número:"))
let suma = 0, contador = 0
if(num > 0){
  do{ 
    suma += contador
    contador += 2
  }while(contador <= num)
}
alert("Suma: " + suma)
