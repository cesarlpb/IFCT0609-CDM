/**
 * Se trata de escribir un script que diga si un número es par o es impar.

Recordemos que un número es par si al dividirlo por 2 da como resto 0.
 */

let num = parseInt(prompt("Introduce un número:"))
esPar = num % 2 == 0 // Boolean -> true o false
if(esPar == true){
    alert("El número " + num + " es par")
}else{
    alert("El número " + num + " es impar")
}