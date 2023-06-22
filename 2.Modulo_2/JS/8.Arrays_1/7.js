/*
parte 1

En este ejempo debes crear una función que reciba una array y devuelva una cadena formada por los elementos del array separados por un guión.

parte 2

Si una letra es una vocal, la función tiene como único parámetro la letra que se quiere comprobar. Debe funcionar igual con mayúsculas y con minúsculas y por supuesto usando arrays.

Solo se aceptan letras internacionales (sin acentos)
*/

// Parte 1
function separarPorGuiones(arr){
  let str = ""
  for(let i = 0; i<arr.length; i++){
    str += arr[i] + "-"
  }
  return str.slice(0,-1) // Quitamos el último guión que me coloca el bucle
}
let arr = [1, 2, 3]
let str = separarPorGuiones(arr)
console.log(str)

// Parte 2
function esVocal(letra){
  const vocales = ["a", "e", "i", "o", "u"]
  if(vocales.includes(letra.toLowerCase())){
    return true
  }
  return false
}
let letra = "a"
console.log(letra, "Es vocal? " + esVocal(letra)) // true
letra = "z"
console.log(letra, "Es vocal? " + esVocal(letra)) // false
letra = "E"
console.log(letra, "Es vocal? " + esVocal(letra)) // true
