/**
 * En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
 * 
*/

let num1 = Number(prompt("Introduce un número:"))
let num2 = Number(prompt("Introduce un número:"))
if(num2 != 0){
    alert(num1 / num2)
}else{
    alert("No se puede dividir por cero!!!")
}