/*
Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.

"cerveza" o "vino"  -> "barra"
"refresco" o "agua" -> "tienda"

*/

let bebida = prompt("Elige tu bebida:\ncerveza o vino\nrefresco o agua")
if(bebida === "cerveza" || bebida === "vino"){
    alert("Vaya a la barra, gracias")
}else if(bebida === "refresco" || bebida === "agua"){
    alert("Vaya a la tienda :)")
}else{
    alert("Bebida no disponible :(")
}

