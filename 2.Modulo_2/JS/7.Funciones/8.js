/*
Escribe una función que recibe como argumento un precio y el porcentaje de impuestos. La función devolverá el valor total a pagar, teniendo en cuenta que al precio se le descuenta un porcentaje del 10% si es mayor de 100 euros.

Si he comprado por valor de 200 euros con un impuesto del 5%, me descuentan un 10% por tanto pago 180 euros más los impuestos que son el 5% de 180. En total 189 euros.
*/

/**
 * Calcula precio final con impuesto y descuento
 * @param {Number} precio 
 * @param {Number} porcentaje de impuesto a aplicar
 * @returns {String} valor en euros con dos decimales
 */
function precioFinal(precio, porcentaje){
  let descuento = precio > 100 ? precio * 10 / 100 : 0
  let impuesto = (precio - descuento) * porcentaje / 100
  return (precio - descuento + impuesto).toFixed(2)
}
