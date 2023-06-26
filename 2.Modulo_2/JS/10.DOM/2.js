/*
Tienes la página web modelo que debe cambiar el color del titular del negro actual a rojo y además debe quedar centrado. El único cambio será en el bloque cambiar y el código de función cambiar()
*/
function cambiar(){
  // Ej 1 - cambiar título Hola mundo
  // Seleccionamos el elemento por id
  let h1 = document.getElementById("titular");
  // Cambiamos el contenido del texto
  h1.innerText = "Hola Mundo con Javascript"
  // Ej 2 - cambio de color en h1
  h1.style.color = "red"; // color rojo
  h1.style.textAlign = "center"; // centrado
}