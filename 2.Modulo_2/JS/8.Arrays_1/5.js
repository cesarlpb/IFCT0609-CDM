/*
Escribe una función que pueda devolver el valor más pequeño de un array numérico o el índice de ese valor. 
- El segundo parámetro de la función dirá si debe devolver el valor ("v") o el índice ("i"). 
- No uses métodos del objeto array.

Se supone que el primer parámetro siempre será una matriz llena con al menos 1 número y sin duplicados.

Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'

min([4,5,7], 'v')  devolverá 4, mientras que min([4,5,7], 'i') devolverá 0.
*/

// Opción 1 con métodos de array:

/**
 * Función que calcula el mínimo en valor o índice de un array
 * @param {Array} arr 
 * @param {String} param param puede ser "v" o "i"
 * @returns {Number} valor mínimo si param es "v" o índice del mínimo si param es "i"
 */
function min(arr, param){
  if(param == "v"){
    return Math.min(...arr)
  }else if(param == "i"){
    let valor = Math.min(...arr)
    return arr.indexOf(valor)
  }else{
    // el param es incorrecto
    return NaN
  }
}

// Opción 2 - diversión con bucles:
function min2(arr, param){
  let min = Infinity, indice = -Infinity
  if(param == "v"){
    for(let i = 0; i<arr.length; i++){
      let num = arr[i]
      if(num < min){
        min = num 
      }
    }
    return min
  }
  if(param == "i"){
    for(let i = 0; i<arr.length; i++){
      let num = arr[i]
      if(num < min){
        min = num 
        indice = i
      }
    }
    return indice
  }
  if(param != "v" || param != "i"){
    return NaN
  }
}