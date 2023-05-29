/*
Diseñar un script que pida un número mayor que cero y devuelva la suma de todos los números pares desde cero al número introducido. Mostrará la suma y volverá a pedir otro núero hasta que el usuario teclee un 0.

Si tecleo el 10 mostrará 30 la suma de 
0+2+4+6+8+10 = 30
*/

let num = parseInt(prompt("Introduce un número:"))
let suma = 0, contador = 0
if(num > 0){
  do{ 
    suma += contador
    contador += 2
  }while(contador <= num)
}
alert("Suma: " + suma)

// Método de la página:
/*
let numero, suma2;
do{
    suma2 = 0;
    numero = parseInt(prompt("Teclear un número"));
    contar = numero;
    do{
        suma2 += (numero%2==0)? numero:0;
        numero--;
  	     }while (numero >0);
console.log(suma2) // Añadimos salida de la suma
}while (contar > 0)
*/