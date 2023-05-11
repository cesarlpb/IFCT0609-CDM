/*
A partir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.

Las estaciones serán 
12,1,2: invierno 
3,4,5:  primavera 
6,7,8:  verano y 
9,10,11:otoño

*/

// TODO: rehacer con if-else, y/o con arrays. El ternario quedaría un poco largo...

let mes = parseInt(prompt("Indica el mes con un número del 1 al 12:"))
switch(mes){
    case 12:
    case 1:
    case 2:
        alert("Es invierno")
        break;
    case 3:
    case 4:
    case 5:
        alert("Es primavera")
        break;
    case 6:
    case 7:
    case 8:
        alert("Es verano")
        break;
    case 9:
    case 10:
    case 11:
        alert("Es otoño")
        break;
    default:
        alert("Ese mes no existe o_O")
}
