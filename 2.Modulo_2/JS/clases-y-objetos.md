## Clases y Objetos

Las clases son plantillas para crear objetos. [Más info](https://www.w3schools.com/js/js_class_intro.asp)

Clase Car:
```javascript
  class Car {
    constructor(name, year) {
      this.name = name; // propiedad "name"
      this.year = year; // propiedad "year"
    }
  }
```
Creamos objetos de la clase Car:
```javascript
let car1 = new Car() 
let car2 = new Car("Mi Coche", 2025) 
let car3 = new Car(2025, "asdf") // campos en el orden incorrecto
let coches = [car1, car2, car3] // array de coches
```
### Métodos
Funciones **dentro** de clases
```javascript
class Car {
  constructor(name = "Coche", year = 2020) {
    this.name = name;
    this.year = year;
  }
  // método "pitar"
    pitar(){
        console.log("Pip piiiiip!")
    }
}
```
Para usar el método, creamos un objeto y ejecutamos `pitar`:
```javascript
let miCoche = new Car()
miCoche.pitar()
// "Pip piiiiip!"
```
