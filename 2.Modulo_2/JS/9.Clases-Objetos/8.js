/*
Para implementar un grupo de alumnos de un curso se crea una lista de objetos alumno. Cada objeto alumno se caracteriza por el nombre del alumno, su número de matrícula y su calificacion.

El objeto tiene un método para poner la calificación: calificar(nota).

Crea el script para gestionar un grupo de 4 alumnos.
*/

class Alumno{
  constructor(
    nombre_ = "",
    matricula_ = "",
    nota_ = 0
  ){
    this.nombre = nombre_
    this.matricula = matricula_
    this.nota = nota_
  }
  calificar(nota){
    if(nota >= 0 && nota <= 10){
      this.nota = nota
    }
  }
}
let alumno1 = new Alumno("Pepe", "234")
alumno1.calificar(5)
let alumno2 = new Alumno("Pepa", "789", 8.5)
let alumno3 = new Alumno("Pepo", "785", 7)
let alumno4 = new Alumno("Pepu", "123", 7.75)