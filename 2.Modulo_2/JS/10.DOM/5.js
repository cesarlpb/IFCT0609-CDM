/*
La página web modelo contiene tres imágenes. Cada imagen está en un bloque figure con un elemento figcaption para un pie de foto. Al pulsar sobre cualquier imagen se debe mostrar su atributo alt en su pie de foto. Si el pie ya está relleno se borrará su contenido y no se escribirá nada.
*/

function ponerPie(figure){
  // Alternativa: dejar el texto siempre en el figcaption y con click alternar visibilidad
  let img = figure.querySelector("img")
  let alt = img.attributes.alt.value
  let figcaption = figure.querySelector("figcaption")
  if(figcaption.innerText == ""){
    figcaption.innerText = alt
  }else{
    figcaption.innerText = ""
  }
}