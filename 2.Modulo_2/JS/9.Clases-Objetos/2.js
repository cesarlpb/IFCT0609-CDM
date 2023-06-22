/*
Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado
*/
class Producto{
  constructor(precio = 0, descuento = 0){
    this.precio = precio
    this.descuento = descuento
  }
  neto(){
    return `El precio final del producto es: ${(precio - descuento).toFixed(2)} €`
  }
}
let precio = Number.parseFloat(prompt("Introduce el precio del producto:"))
let descuento = Number.parseFloat(prompt("Introduce el descuento del producto:"))

let prod = new Producto(precio, descuento)

alert(prod.neto())