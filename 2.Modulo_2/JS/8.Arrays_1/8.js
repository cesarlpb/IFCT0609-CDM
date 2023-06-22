/*
Escribe una función que reciba como argumento un array y que devuelva una cadena de caracteres formada por los elementos del array separados por un guión -> añadimos que se pueda elegir el caracter para concatenar
*/

function separarPorGuiones2(arr, char = "-"){
  let str = ""
  for(let i = 0; i<arr.length; i++){
    if(i!=arr.length-1){
      str += arr[i] + char
    }else{
      str += arr[i]
    }
  }
  return str // Quitamos el último guión que me coloca el bucle
}
let arr = [1, 2, 3]
let str = separarPorGuiones2(arr) // -
console.log(str)
arr = [1, 2, 3]
str = separarPorGuiones2(arr, "-o-") // -
console.log(str)