/*
Escribir una función que reciba un número como argumento y lo devuelva invertido, o sea, escrito del revés. 

Usar esta función para determinar si un número es capicúa (palíndromo)
Si ejecuto invertir(123) me deberá devolver el número 321 y me diría que no es capicua. Sin embargo si hago invertir(242) el resultado sería 242, y la prueba me diría que es capicúa.
*/

/**
 * Retorna número invertido (digitos en order inverso)
 * @param {Number} num 
 * @returns {String}
 */
function invertir(num){
  let string = num.toString()
  return parseInt(string.split("").reverse().join(""))
}