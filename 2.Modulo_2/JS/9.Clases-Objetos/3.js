/*
En esta propuesta debes crear una clase de nombre piedra (con class o con function) con dos propiedades: masa, volumen y un método densidad que calcule este valor (masa/volumen). Luego instancia al menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.
*/

class Piedra{
  constructor(masa = 0, volumen = 1){
    this.masa = masa
    this.volumen = volumen
  }
  densidad(){
    return `Tu piedra tiene densidad: ${masa / volumen} kg/m3`
  }
  // TODO: cambiar resultado a g/cc
  // 3.5 g/cc
}
let masa = 3500   // kg
let volumen = 1   // m^3

let piedra = new Piedra(masa, volumen)
alert(piedra.densidad())
