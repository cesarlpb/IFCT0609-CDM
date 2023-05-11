/*
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.
*/

// carne    ->  vino tinto
// pescado  ->  vino blanco
// verdura  ->  agua

// Método 1: if-else
let opcion = prompt("Elige el menu que quieres:\ncarne\npescado\nverdura")
opcion = opcion.toLowerCase() // para validar el caso de que haya alguna mayúscula -> lo pasamos todo a minúsculas
if(opcion == "carne"){
    alert("Tiene de bebida vino tinto")
}else if(opcion == "pescado"){
    alert("Tiene de bebida vino blanco")
}else if(opcion == "verdura"){
    alert("Tiene de bebida agua")
}else{
    alert("Esa opción no existe.")
}
// Método 2: ternario
let mensaje = opcion == "carne" 
            ? "vino tinto"
            : opcion == "pescado" 
            ? "vino blanco"
            : opcion == "verdura" 
            ? "agua" 
            : "Ese menú no existe."
alert(mensaje)
// Método 3: switch-case
switch(opcion){
    case "carne":
        alert("vino tinto 2")
        break;
    case "pescado":
        alert("vino blanco 2")
        break;
    case "verdura":
        alert("agua 2")
        break;
    default:
        alert("No existe ese menú")
}

