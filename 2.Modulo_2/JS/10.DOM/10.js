// El primer botón de la barra de botones en la parte superior de la página tiene el texto abrir/cerrar. Al pulsarlo se deben ocultar o mostrar los botones restantes, pero el de abrir/cerrar debe quedar visible.

function toggle(){
  let botones = document.querySelector("section.botones")
  let divs = botones.querySelectorAll("div")
  // Bucle para ocultar o mostrar los div, nos saltamos el primer elemento
  for(let i = 1; i<divs.length; i++){
    let div = divs[i]
    if(div.style.display != "none"){
      div.style.display = "none"
    }else{
      div.style.display = "inline-block"
    }
  }
}