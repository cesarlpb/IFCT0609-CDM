/*
En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.
*/
let longitud = parseFloat(prompt("Introduce longitud del tramo en km:"))
let tiempo = parseFloat(prompt("Introduce tiempo del tramo en h:"))
let velocidad = 0 // global
if(tiempo != 0){
    velocidad = longitud / tiempo // en km/h
}
if(velocidad){
    if(velocidad >= 40 && velocidad <= 60){
        alert("Has pasado el tramo!")
    }else{
        alert("No has pasado el tramo. F")
    }
}else{
    alert("Algún dato es incorrecto")
}

