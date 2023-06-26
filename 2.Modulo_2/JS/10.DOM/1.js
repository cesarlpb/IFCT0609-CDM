/*
En la página web modelo ves que tienes un titular Hola Mundo. 
Se trata de añadir una función javascript para que al pulsar el botón cambiar este título se convierta en Hola Mundo con Javascript. 
El unico cambio necesario es el bloque con el texto cambiar y  completar la función cambiar() que aparece en el código de la página.
*/

function cambiar(){
  // Seleccionamos el elemento por id
  let h1 = document.getElementById("titular");
  // Cambiamos el contenido del texto
  h1.innerText = "Hola Mundo con Javascript"
}