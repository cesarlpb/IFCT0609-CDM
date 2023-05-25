/*
Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  

Si le doy el número 5 pues deberá contar 0,1,2,3,4,5
*/

let num = parseInt(prompt("Introduce un número entero:"))
let i = 0, mensaje = ""
while(i <= num){
    mensaje += i + ", "
    i++
}
alert(mensaje.slice(0,-2))

