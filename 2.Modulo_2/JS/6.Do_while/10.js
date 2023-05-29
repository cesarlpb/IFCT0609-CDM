/*
Escribir un script para determinar si el numero introducido por el usuario es un palíndromo, es decir, un número que se lee igual del derecho que del revés.

Para invertir el número podéis hacer sucesivas divisiones entre 10: el resto lo añadis al inveso multiplicado por 10. Y repetis con el valor entero del numero dividido por 10.
*/

let string = prompt("Introduce un número:")
let newString = ""
if(isNaN(parseInt(string))){
  alert("Debes introducir un número válido")
}else{
  // Iniciamos este contador en el último indice del string para revertirlo
  let indice = string.length-1
  do{
    newString += string[indice]
    console.log(indice, newString, string)
    indice--
  }while(indice >= 0)
  alert(`${string} es palíndromo? ${string == newString}`)
}