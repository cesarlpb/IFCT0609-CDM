/*
Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán
nombre
sesiones
numsesioens
El nombre es el de la persona, en los sesiones se almacenará el numero de kilometros recorridos en cada sesión y numsesiones contien el númeor de sesiones anotadas.

Tiene dos métodos:

anotar: anota los kilómetros
media: calcula la media de kilómetros recorridos
*/
class Ficha{
  constructor(
    nombre_ = "", 
    sesionesKm_ = [], 
    numSesiones_ = 0)
    {
      this.nombre = nombre_
      this.sesionesKm = sesionesKm_
      this.numSesiones = numSesiones_
    }
  anotar(km){
    if(!isNaN(km)){
      this.sesionesKm.push(km)
      this.numSesiones++
    }
  }
  media(){
    let suma = 0
    for(let i = 0; i<this.sesionesKm.length; i++){
      suma += this.sesionesKm[i]
    }
    if(this.numSesiones != 0){
      return suma / this.numSesiones
    }else{
      return 0
    }
  }
}
let ficha = new Ficha("Pepe")
ficha.anotar(1)
ficha.anotar(3)
ficha.media() // 2