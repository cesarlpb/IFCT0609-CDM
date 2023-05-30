/*
Diseña una función que calcule el factorial de un número, usa una función recursiva (que se llama a si misma). 
Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1. Y el factorail de 0 es por definición 1
Si escribo factorial(3) obtendré 3*2*1 = 6

No valen números negativos
factorial(0) = 1
factorial(1) = 1
factorial(5) = 5*4*3*2*1 = 120

factorial(3) = 3*factorial(2)
             = 3*2*factorial(1)
             = 3*2*1 = 6
*/

/**
 * Calcula el factorial de un número entero. 
 * Máximo: 170! 
 * A partir de 171! sale Infinity
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number} 
 */
function factorial(num){
  num = parseInt(num)
  if(num == 1 || num == 0){
    return 1
  }
  if(num < 0 || isNaN(num)){
    return NaN // no se puede calcular
  }
  return num*factorial(num-1)
}
// Se puede resolver con un bucle
// TODO: Rehacer usando BigInt -> en teoría se puede llegar a cerca de factorial de 1750 (?)
// Info: https://stackoverflow.com/questions/53335545/whats-the-biggest-bigint-value-in-js-as-per-spec

