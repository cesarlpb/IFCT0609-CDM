/*
El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará un mensaje de acierto en caso contrario dirá que se produjo un error.

Se trata de usar el if resumido (cond?true:false)
*/
let num1 = parseInt(prompt("Introduce un número:"))
let num2 = parseInt(prompt("Introduce el cuadrado del número:"))

// Método 1: if else
// Elevar al cuadradro, tb se puede hacer num1**2
if(num2 == num1*num1){
    alert("Es correcto")
}else{
    alert("No es correcto")
}
// Método 2: ternario
let mensaje = num2 == num1**2 ? "Es correcto :)" : "No es correcto :("
alert(mensaje)