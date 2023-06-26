/*
Escribe un script de nombre creaDiv() que crea un nuevo bloque div en la página modelo. El bloque se creará al pulsar el botón con texto Crear, sus colores serán texto blanco con fondo rojo y el texto quedará centrado. Este texto consiste en la cadena "Javascript permite crear páginas dinámicas".
*/
// Ej 3 - función para crear un div
function crearDiv(){
  let container = document.getElementById("container");
  container.innerHTML = "<div>Javascript permite crear páginas dinámicas</div>";
  container.style.color = "white";
  container.style.backgroundColor = "red";
  container.style.textAlign = "center";
  container.style.padding = "10px";
  container.style.width = "50%";
  container.style.margin = "0 auto";
}