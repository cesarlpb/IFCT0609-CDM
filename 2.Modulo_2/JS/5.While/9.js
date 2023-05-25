/*
Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin. El usuario deberá teclear uno de ellos y el programa mostrará la opción elegida. Si teclea un valor fuera del menus se mostrará un mensaje de error y se vuelve a pedir un número de opción. El programa finaliza al teclear el 3.

Pulso 1, mensaje Opción leeer datos. Y vuelve a pader opción. Pulso 4 : Error y vuelve a pedir opción, Pulso 3: Fin del programa y acaba.
*/

let opcion = 0
while(opcion != 3){
  opcion = parseInt(prompt("Elige opcion:\n1. Leer datos\n2. Mostrar datos\n3. Finalizar programa"))
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
}

