/*
En este script debes pedir al usuario un programa de dos dígitos y debes devolver el número de unidades y de decenas, o sea, cada dígito del número.

Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades

45 -> 4 decenas y 5 unidades
*/

// Método 1: usamos string
let num = prompt("Introduce un número:")
let decenas = num[0]
let unidades = num[1]
let mensaje = decenas + " decenas y " + unidades + " unidades"
alert(mensaje) 

// Método 2: dividiendo entre 10
let num2 = parseInt(prompt("Introduce un número:")) // entero
let decenas2 = parseInt(num2 / 10)
let unidades2 = num2 - decenas2*10 // entero
let mensaje2 = decenas2 + " decenas y " + unidades2 + " unidades"
alert(mensaje2) 

