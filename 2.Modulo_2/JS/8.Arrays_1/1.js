/*
En este script deberás crear un array para guardar los nombres de los días de la semana, empezando por 0 para el domingo. 

Para comprobar el funcionamiento pide al usuario un número entre 0 y 6 y devuelve el nombre del día. Se supone que el dato tecleado estará entre 0 y 6

Si tecleo el número 4 me deberá decir que el día de la semana es jueves 
*/

let dias = [
  "Domingo", "Lunes", "Martes",
  "Miércoles", "Jueves", "Viernes",
  "Sábado"
]
let indice = Number(prompt("Introduce un número del 0 a 6:"))
alert(dias[indice])

// TODO: no hemos incluído validaciones...