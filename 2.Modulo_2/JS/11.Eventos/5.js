/*
En esta página tienes dos bloques div a modo de botones, como ves en este código HTML de abajo. Debes escribir una única función Javascript (llamada pulsar) para manejar los eventos click de ambos botones. Cuando pulses con el ratón en cualquier botón deberá aparecer una ventana alert indicando el id del botón donde se ha pulsado.
*/
function ej5(){
  let boton1 = document.getElementById("boton1")
  let boton2 = document.getElementById("boton2")

  boton1.addEventListener("click", function(event){
    alert(event.target.attributes.id.value)
  })
  boton2.addEventListener("click", function(event){
    alert(event.target.attributes.id.value)
  })
}
ej5()