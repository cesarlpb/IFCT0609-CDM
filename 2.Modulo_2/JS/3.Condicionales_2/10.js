/*
En este ejercicio el script convertirá las notas numéricas de un examen en paabras: 0 - 4.9999999 suspenso, 5-6.99999999 aprobado, 7-9 notable, <9-10 sobresaliente.
*/

// TODO: ¿alguna otra forma de hacer esto?

let nota = Number(prompt("Introduce la nota:"))

if(nota >= 0 && nota < 5){
    alert("suspenso")
}else if(nota >= 5 && nota < 7){
    alert("aprobado")
}else if(nota > 7 && nota < 9){
    alert("notable")
}else if(nota >= 9 && nota <= 10){
    alert("sobresaliente")
}else{
    alert("nani?")
}

