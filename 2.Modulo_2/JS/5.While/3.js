/*
Un script que preguntará al usuario si desea continuar con el programa. Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará. 

Cualquier otra entrada repetirá la pregunta

El usuario teclea Si, como no es la letra s pues dirá Error, ¿Desea seguir con el programa?
*/

let respuesta = "s"
while(respuesta.toLowerCase() != "n"){
  respuesta = prompt("¿Quieres continuar el programa?")
}
alert("El programa ha terminado")