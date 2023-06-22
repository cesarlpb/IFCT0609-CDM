/*
Un tienda vende monitores, teclados y ratones. Los precios se almacenan en una estructura array conde cada elemento es un par producto - precio.

Diseña una función que reciba como argumento el nombre de un producto (minúscula) y devuelva su precio.
*/

const datos = [
  ["monitor LG", 125],
  ["teclado gaming", 50],
  ["ratón Corsair", 19.99]
]

function buscarPrecio(producto){
  for(let i = 0; i<datos.length; i++){
    let dato = datos[i] // arr -> 0 es el nombre del producto, 1 -> precio
    let nombreProducto = dato[0]
    if(nombreProducto.includes(producto)){
      return dato[1] // precio
    }else{
      return NaN
    }
  }
}
let producto = "monitor LG"
let precio = buscarPrecio(producto)
console.log(producto, precio) // 125
producto = "monitor"
precio = buscarPrecio(producto)
console.log(producto, precio) // 125
producto = "monitor$"
precio = buscarPrecio(producto)
console.log(producto, precio) // NaN

