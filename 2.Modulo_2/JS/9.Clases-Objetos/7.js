/*
Un artículo tiene un nombre, un proveedor y un precio. Y un proveedor tiene un nombre, email y telefono. Se pide definir una clase (Proveedor) para implementar el objeto proveedor y otra (Articulo) para el obejto artículo. Este objeto tiene los siguientes atributos o propiedades:

proveedor: un objeto proveedor
nombre: una cadena
precio: un número
Y métodos:

telefono(): devuelve un objeto con el nombre y elefono del proveedor
Por su parte el objeto proveedor tiene como propiedades

nombre: cadena de texto
email: un email
teléfono: una cadena de dígitos
Puedes implementarlo con create, function o con class
*/
class Proveedor{
  constructor(
    nombre_ = "Proveedor por defecto",
    email_ = "soporte@proveedor.com", 
    telefono_ = "123456789"
  ){
    this.nombre = nombre_
    this.email = email_
    this.telefono = telefono_
  }
}
class Articulo{
  constructor(
    proveedor_ = new Proveedor(),
    nombre_ = "Artículo por defecto",
    precio_ = 0
  ){
    this.proveedor = proveedor_
    this.nombre = nombre_
    this.precio = precio_
  }
  imprimirDatosProveedor(){
    return {
      "nombre": this.proveedor.nombre,
      "telefono": this.proveedor.telefono
    }
  }
}
let ikea = new Proveedor("IKEA", "soporte@ikea.es", "658789145")
let articulo = new Articulo(
  ikea, "silla gaming", 99.99
)
articulo.imprimirDatosProveedor() // new Proveedor("IKEA", "soporte@ikea.es", "658789145")