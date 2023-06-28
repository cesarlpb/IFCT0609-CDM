/*
En este input no se deben aceptar valores que sean numéricos. Todo lo que esté entre 0 y 9 no se deben aceptar. Diseña un manejador de eventos para evitar que en el control se anoten números.
*/
let prev = "" // valor precio del input
let input = document.getElementById("letras")
function ej10(){
  input.addEventListener("input", function(event){
    console.log("data:", event.data)
    console.log("target.value:", event.target.value)
    if(parseInt(event.data) == event.data){
      input.value = prev
    }else{
      prev = event.target.value
    }
  })
}
ej10()