/*
En este script vas a crear un menu con tres opciones: escribir, leer, salir. El usuario elegirá una opción y en un alert se le indicará la opción elegida. El programa vuelve a mostrar el menu y se repite el proceso. El script acabará cuando se pulse la opción de salir.

El menu tiene 3 opciones, elijo la opción 2, respuesta "has elegido leer".
*/

do{
  const opciones = "Elige opcion:\n1. Leer datos\n2. Mostrar datos\n3. Finalizar programa"
  opcion = parseInt(prompt(opciones))
  switch(opcion){
    case 1:
      alert("Leer datos")
      break;
    case 2:
      alert("Mostrar datos")
      break;
    case 3:
      alert("Fin del programa")
      break;
    default:
      alert("Opción no válida")
  }
}while(opcion != 3)