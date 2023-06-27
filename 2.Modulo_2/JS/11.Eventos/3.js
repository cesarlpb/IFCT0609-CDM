/*
En esta págian web debes agregar un script para asignar un manejador de eventos al botón button. Este script deberá escribir en el campo total el valor de multiplicar los toros dos campos.

La página mostrará el formulario, si se escribe 5 y 8 al pulsar sobre el botón de calcular  aparecerá 40 en el campo total. Coloca el script al final del body.
*/

let btn = document.getElementById("enviar") // <button>
btn.addEventListener("click", function(){
  // Leer los números
  let num1 = document.getElementById("precio").valueAsNumber
  let num2 = document.getElementById("cantidad").valueAsNumber
  // Realizar la operación
  let resultado = num1 * num2
  // Escribir el resultado
  let total = document.getElementById("total")
  total.value = resultado
});