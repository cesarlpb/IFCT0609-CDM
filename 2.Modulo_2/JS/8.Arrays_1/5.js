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