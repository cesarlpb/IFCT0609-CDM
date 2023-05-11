/*
En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si apga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.
*/

// TODO: resolver este ejercicio con los otros dos métodos
// TODO: rehacer con arrays - yay!
// TODO: corregir eso del 0 y del 5
// Nota: no uses switch. Acaba mal.

let saldo = parseInt(prompt("Introduce tu saldo:"))
let salas = "" // string
switch(true){
    case saldo == 1:
        salas = "Consolas"
        break;
    case saldo == 2:
        salas = "Consolas, Juegos 2D"
        break;
    case saldo == 3:
        salas = "Consolas, Juegos 2D, Juegos 3D"
        break;
    case saldo >= 4:
        salas = "Consolas, Juegos 2D, Juegos 3D, Realidad Virtual"
        break;
    default:
        salas = "ninguna sala :("
}
alert("Puedes ingresar a " + salas)
// Más info: https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than