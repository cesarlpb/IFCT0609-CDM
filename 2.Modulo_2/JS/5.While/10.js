/* 
Un script pedirá al usuario que vaya tecleando números hasta llegar al 0, entocnes el programa muestra "La suma es " seguido de la suma de los números. Si esta suma es par el programa se repite y si es impar el programa acaba.

Si tecleo 2,6,2, 0 Me dirá suma "10" y volverá a pedir otra serie de números, si tecleo 2,6,3 Me dirá "suma 11" y acabará.
*/

let num = NaN
let suma = 0
while(num != 0 && suma % 2 == 0){
  while(num != 0){
    num = parseInt(prompt("Introduce un número:"))
    if(!isNaN(num)){
      suma += num
    }
  }
  alert("La suma es: " + suma)
  console.log(num, suma % 2 != 0)
  if(suma % 2 != 0){
    break;
  }else{
    num = NaN
    suma = 0
  }
}
