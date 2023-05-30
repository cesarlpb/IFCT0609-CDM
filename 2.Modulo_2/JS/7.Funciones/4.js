/*
Definir una función que cree una cadena de letras repetidas tantas veces como le digamos. La función recibe dos argumentos: la letra y el número de repeticiones.
Al ejecutar repetir('a', 5) deberá devover la caden  aaaaa.
*/

/**
 * Fn que repite un string varias veces
 * @param {String} char string a repetir
 * @param {Number} repeticiones veces a repetir
 * @returns {String} resultado
 */
function repetir(char, repeticiones){
  return char.repeat(repeticiones)
}
// Se puede hacer con cualquier bucle for, while, do while...