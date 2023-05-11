/*
En este caso, también usando el operador ternario o if reducido, un visitante a la página deberá teclear su edad, si es igual o mayor de 18 recibirá el mensaje de "Entra" en caso contrario deberá decirle los años que tiene que estperar para entrar
*/

// TODO: validar que no nos han pasado un dato incorrecto

// Método 1: if-else
let edad = parseInt(prompt("Introduce tu edad:"))
if(edad >= 18){
    alert("Entra!")
}else{
    alert("No puedes pasar.\nEspera " + (18 - edad) + " años." )
}

// Método 2: ternario:
let mensaje = edad >= 18 ? "Entra!!" : "No puedes entrar hasta dentro de " + (18 - edad) + " años."
    alert(mensaje)