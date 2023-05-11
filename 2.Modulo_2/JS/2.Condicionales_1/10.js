/*
Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7.
*/
let nota1 = Number(prompt("Introduce la primera nota:"))
let nota2 = Number(prompt("Introduce la segunda nota:"))
let nota3 = Number(prompt("Introduce la tercera nota:"))

//TODO: validar que no son NaN o Infinity, etc.

let media = (nota1 + nota2 + nota3)/3

if(media < 5 && media >= 0){
    alert("suspenso")
}else if(media >= 5 && media <= 7){
    alert("aprobado")
}else if(media > 7 && media < 9){
    alert("notable")
}else if(media > 9 && media <= 10){
    alert("sobresaliente")
}else{
    alert("nivel boss ?")
}