/*
En esta página existen tres bloques ocultos. Debes crear un evento de teclado para que actúe cuando el usuario pulsa una tecla. Si pulsa la tecla 1 se abre el bloque con id ficha1, si pulsa 2 se abre el bloque ficha2 y si 3 se abre el de ficha3.
*/
function ej8(){

  let ficha1 = document.getElementById("ficha1")
  let ficha2 = document.getElementById("ficha2")
  let ficha3 = document.getElementById("ficha3")

  document.addEventListener("keydown", (event) => {
    console.log("tecla:", event.key)
    switch(event.key){
      case "1":
        ficha1.classList.remove("oculto");
        ficha1.classList.add("visible");
        break;
      case "2":
        ficha2.classList.remove("oculto");
        ficha2.classList.add("visible");
        break;
      case "3":
        ficha3.classList.remove("oculto");
        ficha3.classList.add("visible");
    }
  });
}
ej8()