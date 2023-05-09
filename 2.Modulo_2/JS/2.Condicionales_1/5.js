/**
 * En este ejemplo el usuario entrará dos números. Debe devolver la diferencia entre el mayor y el menor
*/

let num1 = Number(prompt("Introduce un número:"))
let num2 = Number(prompt("Introduce un número:"))

if(num2 > num1){
    alert(num2-num1)
}else{
    alert(num1-num2)
}