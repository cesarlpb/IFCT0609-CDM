/*
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche, luego le pide el número de litros consumidos. 
El script debe mostrar el consumo de combustible por kilómetro.

Un problema matemático muy simple número de litros dividido por número de kilómetros.
*/

let km = Number(prompt("Introduce los kilómetros recorridos:"))
let litros = Number(prompt("Introduce los litros consumidos:"))
let consumo = litros / km
alert(consumo.toFixed(2) + " L/km")