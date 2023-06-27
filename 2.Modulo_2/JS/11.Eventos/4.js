// Crea un script para que se active cuando la página se haya cargado completamente (evento load de window). Una vez cargada la página el script asignará un evento al bñpque de manera que al entrar el ratón su fondo pase a rojo y al salir vuelva al blanco.

// El script se colocará en la sección head. de la página.

function ej4(){
  let div = document.getElementById("cuadro")
  console.log(div)
  div.addEventListener("mouseenter", function() {
    console.log("enter")
    div.style.backgroundColor = "red"
  })
  div.addEventListener("mouseleave", function(){
    console.log("leave")
    div.style.backgroundColor = "white"
  })
}