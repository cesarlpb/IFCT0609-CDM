/*
Necesitas una página web con dos bloques div. El primer bloque contiene el texto "Pasa por aqui" y el segundo "Efectos del movimiento" con un argumento id = "efecto" . Cuando el ratón pase por el primer bloque se llamará a la función color que cambia el fondo del segundo bloque a color verde (backgroundColor green")
*/
function ej2(pos){
  let segundoDiv = document.querySelector(".borde.rojo")
  if(pos == "dentro"){
    console.log("Cursor encima del div - verde")
    segundoDiv.style.backgroundColor = "green";
  }else{
    console.log("Cursor fuera del div - rojo")
    segundoDiv.style.backgroundColor = "red";
  } 
}