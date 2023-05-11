/*
En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo al tipo de coche que elija. Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficia 200 y si elige electrico o 3 se le enviará a la ofician 300.
*/

// TODO: ¿Se te ocurre una forma mejor de hacer esto?

let opcion = parseInt(prompt("Elige el tipo de coche por número:\n1) gasolina\n2) diesel\n3) eléctrico"))

switch(opcion){
    case 1:
        alert("Ve a la oficina 100")
        break;
    case 2:
        alert("Ve a la oficina 200")
        break;
    case 3:
        alert("Ve a la oficina 300")
        break;
    default:
        alert("Opción no válida")
}