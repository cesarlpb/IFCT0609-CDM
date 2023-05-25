/*
Determinar si el número que teclea el usuario es primo o no. Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.

Si el usuario telcea el 3: dirá que 3 es primo. Si teclea el 4 dirá que 4 no es primo.

10 -> 1, 2, 5, 10 -> no es primo
7 ->  1, 7 -> primo

0 -> 0, 1 primo
1 -> 1 primo
2 -> 1, 2 primo
3 -> 1, 3
4 -> 1, 2, 4 -> no es primo
etc...

*/

let num = parseInt(prompt("Introduce un número:"))
let esPrimo = true // Al iniciar el boolean así, nos ahorramos el siguiente if

// if(num <= 2){
//   esPrimo = true
// }

let divisor = 2
while(!esPrimo && divisor < num){
  esPrimo = num % divisor != 0
  divisor++
}
// mensaje
alert(num + " es primo: " + esPrimo)
