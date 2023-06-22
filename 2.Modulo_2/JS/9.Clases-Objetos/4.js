/*
Construye una clase usando class para implementar una cuenta de efectivo. Poseerá dos propiedades: nombre del titular y saldo. 

Además debe tener dos métodos: 
ingresar() y retirar(). 

El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce. 
No se puede sacar más de lo que exista en el saldo.
*/

class Cuenta{
  constructor(nombre, saldo = 0){
    this.nombre = nombre
    this.saldo = saldo
  }
  ingresar(cantidad){
    // TODO: validar que no se ingresa un saldo negativo
    // TODO: No se puede retirar saldos superiores a "saldo"
    this.saldo += cantidad
    return this.saldo
  }
  retirar(cantidad){
    // TODO: no se admiten negativos
    this.saldo -= cantidad
    return this.saldo
  }
}

let cuenta = new Cuenta("Pepe")
cuenta.ingresar(100)
cuenta.retirar(40)
console.log(cuenta.saldo) // 60