/*
Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. 

Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.
*/
let cantidad = parseInt(prompt("Introduce número de productos:"))
let precio = parseFloat(prompt("Introduce el precio del producto:"))
let precioTotal = cantidad * precio // euros

// TODO: faltaría validar que no me pasen una cantida o precio negativos

if(cantidad > 10 && precio > 40){
    let descuentoTotal = 15 / 100 * precio * cantidad // de un producto
    precioTotal = precioTotal - descuentoTotal
}
alert("Precio a pagar: " + precioTotal.toFixed(2) + " €")