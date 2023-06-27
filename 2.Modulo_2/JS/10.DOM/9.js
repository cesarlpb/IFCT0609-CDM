/*
En la página modelo tienes un elemento div con un imagen en su interior. Cada vez que hagaas click con el ratón sobre el la imagen cambiará.

El bloque tiene como clase carrousel. Dispones de tres imágenes: uno.png, dos.png y tres.png. Se deberán ir sucediendo en forma circular, despues de la última vuelve a la primera

El bloque posee un atributo data-set que almacena el nombre de la imagen visible en cada momento.
*/

function cambiaImg(){
  const srcs = ["./uno.png", "./dos.png", "./tres.png"]

  let slider = document.querySelector(".carrusel"); // div > img
  let img = slider.querySelector("img");
  
  // Buscamos el id del src actual en el array srcs
  let srcActual = img.attributes.src.value // Hay que acceder al valor del src
  let idx = srcs.findIndex(src => src == srcActual)
  
  // Bucle para incrementar el indice o resetearlo a 0
  if(idx < srcs.length - 1){
    idx++
  }else{
    idx = 0
  }
  
  // Actualizamos el valor de src en img con la nueva imagen:
  slider.querySelector("img").attributes.src.value = srcs[idx]
}
