/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:

* Si ha comprado menos de 100 euros no hay descuento -> descuento = 0
* Si la compra está entre 100 y 300 euros le descuenta un 5%
* Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
* Si la compra supera los 500 euros le descuenta un 15%
*/

let precio = Number(prompt("Introduce el precio de la compra:")) // euros

let descuento = 0 // %

// TODO: validar que no sea número negativo o NaN, etc.

if(precio >= 100 && precio <= 300){
    descuento = 5
}else if(precio > 300 && precio <= 500){
    descuento = 10
}else if(precio > 500){
    descuento = 15
}
let precioDescontado = descuento / 100 * precio // €
let precioFinal = precio - precioDescontado // €
alert("El precio final es: " + precioFinal.toFixed(2) + " €")