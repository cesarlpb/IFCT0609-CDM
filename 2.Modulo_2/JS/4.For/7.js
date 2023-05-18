/*
Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4

Usamos el console log para ir imprimiendo los valores de los dígitos, deberá quedar algo así:

0:0
0:1
0:2
...
...
1:4 será el final del conteo
*/
let lineas = ""
for(let i=0; i<2; i++){
  for(let j=0; j<5; j++){
    lineas += i + ":" + j + "\n"
  }
} 
alert(lineas)