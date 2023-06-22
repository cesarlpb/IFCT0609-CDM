/*
Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones
*/

class Alumno{
  constructor(nombre, ingles, programacion, html){
    this.nombre = nombre
    this.ingles = ingles
    this.programacion = programacion
    this.html = html
  }
  imprimirMedia(){
    return `La nota media del alumno ${this.nombre} es: ${((this.ingles + this.programacion + this.html)/3).toFixed(2)}`
  }
}
let pepe = new Alumno("Pepe", 8, 4.9, 5.01)
let media = pepe.imprimirMedia()
console.log(media)
let pepe2 = new Alumno("Pepe 2", 9, 4.75, 6)
media = pepe2.imprimirMedia()
console.log(media)