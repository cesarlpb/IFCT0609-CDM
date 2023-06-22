/*
Escribe una función que determina si la letra que se le pasa como argumento se encuentra contenida dentro de un array de letras que se le pasa como segundo argumento.

Se trata de resolverlo sin usar métodos del objeto array, solo el dato tipo array.
*/

function verificarLetra(letra, arr){
  for(let i = 0; i<arr.length; i++){
    if(arr[i] == letra){
      return true
    }
  }
  return false
}
let letra = "a"
let arr = ["a", "b", "c"]
console.log(letra, arr, "letra en arr?" + verificarLetra(letra, arr)) // true
letra = "z"
console.log(letra, arr, "letra en arr? " + verificarLetra(letra, arr)) // false

