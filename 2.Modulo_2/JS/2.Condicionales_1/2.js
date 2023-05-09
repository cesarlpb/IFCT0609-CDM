/**
 * Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo
 * 
*/

let num = parseFloat(prompt("Introduce un número:"))
if(num >= 0){
    alert(num + " es positivo")
}else{
    alert(num + " es negativo")
}