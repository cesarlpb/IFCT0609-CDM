/**
 * Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...
*/

let texto = prompt("Introduce un caracter:")
let char = texto[0]
// toLowerCase() -> minúsculas
// toUpperCase() -> mayúsculas
if(char.toUpperCase() == 'A'){
    alert("Acertaste!")
}else{
    alert("Vaya... :(")
}