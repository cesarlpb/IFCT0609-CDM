/*
Escribe un script que responda al evento scroll y que muestre un boton o bloque div en el fondo de la pantalla cuando deje de verse la linea superior del documento
*/
function ej9(){
  let boton = document.getElementById("boton")
  document.addEventListener("scroll", function(){
    // console.log("innerHeight:", window.innerHeight) // px
    console.log("scrollY:", window.scrollY) // px
    if(window.scrollY > 105){
      boton.classList.remove("hidden")
      boton.classList.add("boton-fijo")
    }else{
      boton.classList.add("hidden")
      boton.classList.remove("boton-fijo")
    }
  })
}
ej9()