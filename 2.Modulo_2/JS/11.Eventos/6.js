/*
La página descrita con este código HTML posee dos bloques div cuyos atributos id son cX, cY. Debes escribir un manejador para el evento de movimiento del ratón por el documento. Este script deberá anotar en los cuadros cX y cY las coordenadas donde se encuentra el puntero del ratón mientras se mueve por todo el documento.
*/

function ej6(){
  document.addEventListener("mousemove", (event) => {
    console.log(event.pageX, event.pageY)
    let cX = document.getElementById("cX")
    cX.value = event.pageX
    let cY = document.getElementById("cY")
    cY.value = event.pageY
  });
}
ej6()