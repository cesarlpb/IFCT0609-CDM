/*
Escribir un script que pida al usuario una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . Solo falla tres veces se emitirá el mensaje "Alerta, intruso"

La contraseña es por ejemplo pasar. Tecleo tres veces otra distinta: Acceso Intruso.
*/

let contraseña = "", intentos = 1
while(contraseña != "Supersafe123/" && intentos <= 3){
  contraseña = prompt("Introduce la contraseña:")
  intentos++
}
if(intentos < 4){
  alert("Acceso concedido")
}else{
  alert("Acceso denegado")
}