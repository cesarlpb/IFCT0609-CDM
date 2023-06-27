/*
En este script debes leer todos los elementos tipo imagen de la página y mostrar sus urls en un bloque tipo div cuyo id es fuentes y que ya existe en la página modelo usada para estos ejercicios. El script se ejecutará al pulsar el botón con el texto fuentes
*/
function fuentesImg(){
  let imgs = document.querySelectorAll("img")
  let srcs = []
  // Bucle para leer cada src en <img> y añadirlo a un array
  for(let i = 0; i<imgs.length; i++){
    let img = imgs[i]
    let srcText = img.attributes.src.value
    srcs.push(srcText)
  }
  // Creamos HTML para introducir en div#fuentes
  let html ="<h2>Fuentes</h2>"
  html += "<ul>"
  // Bucle para escribir los <li> del <ul> 
  for(let i = 0; i<srcs.length; i++){
    html += `<li>${srcs[i]}</li>`
  }
  html += "</ul>"
  // Seleccionamos el div#fuentes y le añadimos el HTML formateado
  let fuentes = document.querySelector("#fuentes")
  fuentes.innerHTML = html
} 