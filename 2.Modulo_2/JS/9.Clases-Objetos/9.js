/*
En esta ocasión tienes una lista de clientes, cada cliente es un objeto con atributos: nombre, email, telefono.

Se quiere crear una clase Factura para gestionar las facturas emitidas a los clientes. Las propiedades de esta clase son

idCliente: número de cliente (su lugar en la lista de clientes)
total: número con el imorte total de la factura
estado: pagada o pendiente
Los métodos serán

cobrar(): pone el estado en pagada.
imprimir(): imprime los datos de la factura

Para probar crea tres clientes y al menos una factura.
*/

class Cliente{
  constructor(
    id_ = 0,
    nombre_ = "",
    email_ = "",
    telefono_ = ""
  ){
    this.id = id_ 
    this.nombre = nombre_
    this.email = email_
    this.telefono = telefono_
  }
}
class Factura{
  constructor(
    idCliente_ = 0,
    total_ = 0,
    estado_ = "pendiente"
    )
  {
    this.idCliente = idCliente_
    this.total = total_
    this.estado = estado_  
  }
  cobrar(){
    this.estado = "pagada"
  }
  imprimir(){
    console.log(`
      Detalles de la Factura:
      Id: ${this.idCliente}, 
      Importe total: ${this.total.toFixed(2)} €,
      Estado: ${this.estado}
      `
    )
  }
}