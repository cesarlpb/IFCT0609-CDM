/*
Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.

Le tecleamos el valor 5. El resultado será:

*
**
***
****
*****

*/

let num = parseInt(prompt("Introduce un número:"))
console.log("Método 1:")
// Método 1: sin doble bucle for
// Observación: si ponemos que let i=1 el primer espacio en blanco no lo escribes
for(let i=0; i<=num; i++){
    console.log("*".repeat(i))
}
console.log("Método 2:")
for(let i=0; i<=num; i++){
    linea = ""
    for(let j=0; j<i; j++){
        linea += "*"
    }
    console.log(linea)
}