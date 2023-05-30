/*
Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos.

Por ejemplo al llamarla como esPar(5) me dará false, mientras que con esPar(6) me dará true.
*/

/**
 * Función para determinar si número es par
 * @param {Number} num 
 * @returns {Boolean} true si el número es par
 */
function esPar(num){
  return num % 2 === 0
}