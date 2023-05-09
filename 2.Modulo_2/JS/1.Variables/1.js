/*
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.
*/

let precio = 100
let iva = precio * 21 / 100
let precioTotal = precio + iva
alert(precioTotal) // si queremos formatear el número como moneda, podemos usar toFixed(2) -> string