/*
Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. Si va en tren o autobus le recordará que lleve dinero para el billete.

tren o autobús  -> llevar dinero billete
coche           -> coge las llaves
bicicleta       -> el casco

*/

let medioTransporte = prompt("Elige el medio de transporte:\ncoche\nbicicleta\ntren\nautobús")
let opciones = ["tren", "autobús", "autobus"]
medioTransporte = medioTransporte.toLowerCase() // pasando a minúsculas el dato del usuario, así nos ahorramos colocar la transformación a lowerCase en los if...
if(opciones.includes(medioTransporte)){
    alert("Recuerda llevar dinero para el billete")
}else if(medioTransporte == "coche"){
    alert("Coge las llaves!")
}else if(medioTransporte == "bicicleta"){
    alert("Coge el casco!")
}else{
    alert("Buen viaje.")
}
