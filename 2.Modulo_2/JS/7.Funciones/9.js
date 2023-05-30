/*
En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bine, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula.
*/

function calificar(nota) {
  let notaString = ""
  if(nota < 5){
    notaString = "suspenso"
  }else if(nota >= 5 && nota < 7){
    notaString = "bien"
  }else if(nota >= 7 && nota < 8){
    notaString = "notable"
  }else if(nota >= 8 && nota <= 10){
    notaString = "boss"
  }
  return notaString
}