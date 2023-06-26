/*
Crea una clase que llamaremos Bus. Sus atributos serán:

capacidad: número máximo de pasajeros
pasajeros: número de pasajeros (inicialmente 0)
conductor: objeto conductor.

Sus métodos:

subir(pasajeros): aumenta el numero de pasajeros
bajar(pasajaeros): disminuye el número de pasajeros
conductor: asigna un objeto conductor.
El objeto conductor es de una clase (Conductor) cuyos atributos son:

nombre: nombre del conductor
licencia: un número que identifica al condcutor.

Restricciones:

Al crear el objeto Bus se asigna también el Conductor.+

No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.
*/

class Conductor{
  constructor(
    nombre_ = "", 
    licencia_ = ""
    )
    {
      this.nombre = nombre_
      this.licencia = licencia_
    }
  //
}
class Bus{
  constructor(
    capacidad_ = 50,
    pasajeros_ = 0,
    conductor_ = new Conductor("Pepe", "123")
  ){
    this.capacidad = capacidad_
    this.pasajeros = pasajeros_
    this.conductor = conductor_ 
  }
  subir(personas){
    if(personas + this.pasajeros <= this.capacidad){
      this.pasajeros += personas
    }
  }
  bajar(personas){
    if(personas <= this.pasajeros){
      this.pasajeros -= personas
    }
  }
  asignarConductor(conductor_){
    if (conductor_ instanceof Conductor){
      this.conductor = conductor_
    }
  }
}
let bus = new Bus()
bus.subir(10) // bus.pasajeros -> 10
bus.bajar(1)  // bus.pasajeros -> 9
bus.bajar(10) // bus.pasajeros -> 9
bus.asignarConductor(new Conductor("Pepa", "123")) // bus.conductor -> Pepa
// Comprobamos la validación de conductor:
bus.asignarConductor("Pepo") // bus.conductor no cambia -> "Pepa"
bus.asignarConductor(new Conductor("Pepo", "0192")) // bus.conductor sí cambia -> "Pepo"