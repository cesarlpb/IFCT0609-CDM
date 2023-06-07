/*
Sin usar métodos del objeto array, diseña una función llamada sumaLista() capaz de sumar todos los números que forman el array que se le pase como argumento.

Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14
*/

/**
 * Función para sumar los valores de un arr si son números
 * @param {Array} arr 
 * @returns {Number} valor de la suma
 */
function sumaLista(arr){
  let suma = 0
  for(let i = 0; i<arr.length; i++){
    // En caso de que el elemento del arr no sea número, lo ignora en la suma
    if(!isNaN(arr[i]))
    {
      suma += arr[i]
    }
  }
  return suma
}