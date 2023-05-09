/*
Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.

Recuerda una hora son 6o minutos y cada minuto son 60 segundos.
*/

let horas = parseInt(prompt("Introduce horas:"))
let minutos = parseInt(prompt("Introduce minutos:"))
let segundos = horas*60*60 + minutos*60
alert(segundos + " seg")



