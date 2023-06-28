/*
En la página que puedes construir con este código HTML tienes tres bloques: uno de color rojo otro de color blanco y otro de color azul. Crea un script para que cuando el ratónse mueve desde el bloque rojo al central éste se pongo rojo. Si se mueve desde el azul al central, éste se pondrá azul. Si entra en el bloque desde otro sitio el bloque recuperará el color blanco.
*/
function ej7(){
  let c1 = document.getElementById("c1")
  let c2 = document.getElementById("c2")
  let c3 = document.getElementById("c3")
  let fuera = document.getElementById("fuera")
  let prevDiv = ""

  function cambiarColorDiv(e, origen, destino){
    console.log(e, origen, destino)
    
    if((origen == "fuera" && destino == "rojo") || 
    origen == "rojo" && destino == "fuera"){
      prevDiv = "rojo" // vengo del div rojo
    }
    if((origen == "fuera" && destino == "azul") || 
    origen == "azul" && destino == "fuera"){
      prevDiv = "azul" // vengo del div azul
    }
    if(origen == "fuera" && destino == "fuera"){
      prevDiv = "fuera" // vengo de "fuera" de los divs
    }

    // blanco
    if(origen == "rojo" && destino == "fuera"){
      if(prevDiv == "rojo"){
        // Si vengo de rojo y entro en blanco, cambiamos a rojo el c2 (blanco)
        c2.style.backgroundColor = "red"
      }
      prevDiv = "blanco" // entro en blanco
    }
    if(origen == "azul" && destino == "fuera"){
      if(prevDiv == "azul"){
        // Si vengo de rojo y entro en blanco, cambiamos a rojo el c2 (blanco)
        c2.style.backgroundColor = "blue"
      }
      prevDiv = "blanco" // entro en blanco
    }
    if(origen == "fuera" && destino == "fuera"){
      if(prevDiv == "fuera"){
        // Si vengo de rojo y entro en blanco, cambiamos a white el c2 (blanco)
        c2.style.backgroundColor = "white"
      }
      prevDiv = "blanco" // entro en blanco
    }
  }
  // rojo 
  c1.addEventListener("mouseenter", (e, origen = "fuera", destino = "rojo") => cambiarColorDiv(e, origen, destino))
  c1.addEventListener("mouseleave", (e, origen = "rojo", destino = "fuera") => cambiarColorDiv(e, origen, destino))
  // blanco
  c2.addEventListener("mouseenter", (e, origen = "fuera", destino = "blanco") => cambiarColorDiv(e, origen, destino))
  c2.addEventListener("mouseleave", (e, origen = "blanco", destino = "fuera") => cambiarColorDiv(e, origen, destino))
  // azul
  c3.addEventListener("mouseenter", (e, origen = "fuera", destino = "azul") => cambiarColorDiv(e, origen, destino))
  c3.addEventListener("mouseleave", (e, origen = "azul", destino = "fuera") => cambiarColorDiv(e, origen, destino))
  // div que envuelve a los demás para determinar cuando estamos "fuera" de estos divs
  fuera.addEventListener("mouseleave", (e, origen = "fuera", destino = "fuera") => cambiarColorDiv(e, origen, destino))
}
ej7()