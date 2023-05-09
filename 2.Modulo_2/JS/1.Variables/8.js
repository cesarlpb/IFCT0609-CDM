/*
Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias

5 comensales,
Se necesitará:
1 kg de papas
5 huevos
300 gr de cebolla
*/

let comensales = parseInt(prompt("Introduce los comensales:"))
let patatasGr = 200 * comensales // gramos de patatas
let patatasKg = patatasGr / 1000
let huevos = 5 * patatasKg
let cebollaGr = 300 * patatasKg

let mensaje = patatasKg + " kg de patatas\n"
mensaje += huevos + " huevos\n"
mensaje += cebollaGr + " gramos de cebolla"
alert(mensaje)

