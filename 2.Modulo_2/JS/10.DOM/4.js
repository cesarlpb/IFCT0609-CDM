/*
En la página web modelo debes lograr que al pulsar el botón con el texto borrar se deberá eliminar el bloque que aparece bajo el titular, no ocultar, sino borrarlo. Para detalles mira el código fuente de la página. Solo tienes que escribir el código de la función borrar()
*/

function borrarDiv(){
  // Seleccionamos el elemento por id
  let el = document.getElementById("subtitulo");
  el.remove() // borra el elemento
}