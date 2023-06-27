/*
El script que tienes que crear en la página modelo debe cambiar la clase del elemento que contiene al encabezado de la página. Al pulsar sobre el titular se añadirá o se eliminarás (toggle) la clase de nombre activo
*/
function togleClase(){
  let titular = document.querySelector("#titular")
  let clases = titular.classList // array
  if(clases.contains("activo")){
    titular.classList.remove("activo")
  }else{
    titular.classList.add("activo")
  }
}