/*
Crea un array booleano con dos valores 'verdadero' y 'falso'. 
Este array te sirve para traduicr los valores true y false. 
Usalo para que el script muestre un alert con el nombre vedadero si un usuario teclea un valor entre 0 y 9 y falso en el caso contrario.

Por ejemplo al teclear 10 deberá devolver falso
*/

let arr = ["falso", "verdadero"]
let num = parseInt(prompt("Introduce un número entero:"))
if(num >= 0 && num <= 9){
  alert("El número está en el rango: " + arr[1])
}else{
  alert("El número está en el rango: " + arr[0])
}
