/**
 * No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales.
 * 
*/

// Operador módulo %
// Da el resto de la división entera

let num = parseInt(prompt("Introduce un número:"))
esPar = num % 2 == 0 // Boolean -> true o false
alert(num + " es par: " + esPar)