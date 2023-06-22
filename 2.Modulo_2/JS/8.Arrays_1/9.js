/*
Un servicio de atención al ciente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana se encarga del servicio  una persona: lunes - María, Martes - Luis, Miércoles - Antonia, Jueves - Pedro, Viernes - Marisa.

Usa un array para almacenar los datos del servicio. En este array cada elemento será un para día - nombre.

Crea una función que responda con el nombre de la persona encargada del servicio sabiendo el día. Si el día no existe deberá decir que no hay servicio. Los nombres de los días deben ir en minúsculas.
*/

const horarios = [
  ["lunes", "María"], 
  ["martes", "Luis"], 
  ["miércoles", "Antonia"], 
  ["jueves", "Pedro"], 
  ["viernes", "Marisa"]
]

function buscarEncargado(diaSemana){
  for(let i = 0; i<horarios.length; i++){
    let [dia, encargado] = horarios[i]
    if(dia == diaSemana.toLowerCase()){
      return encargado
    }
  }
  return "No hay servicio"
}
let dia = "martes"
console.log(buscarEncargado(dia)) // Luis
dia = "sábado"
console.log(buscarEncargado(dia)) // No hay servicio
