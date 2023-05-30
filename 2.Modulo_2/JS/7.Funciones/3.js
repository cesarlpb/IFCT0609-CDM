/*
Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento.
Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4.
*/

/**
 * @param {Number} multiplo 
 * @param {Number} numero 
 * @returns {Boolean} true si es múltiplo
 */
function esMultiplo(multiplo, numero){
  return multiplo % numero == 0
}