/*
Escibe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200....
Por ejemplo si le pido siglo(1910) me dirá siglo 20

Info: https://www.deperu.com/abc/curiosidades/6366/como-saber-a-que-siglo-corresponde-cada-ano
*/

/**
 * Calcula el siglo de forma no controvertida
 * @param {Number} año 
 * @returns {Number} siglo del año recibido
 */
function calcularSiglo(año){
  return Math.ceil(año / 100)
}
// Suponemos que el año es positivo