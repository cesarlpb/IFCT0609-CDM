Examen del 11 de julio

## Test 
- [Drive. Plantilla actualizada para el examen del 11 de julio](https://drive.google.com/file/d/1KWQj2a43eShFcdhuUzgAcgDy9QaONH3R/view?usp=drive_link)
- [Formulario de entrega 11 julio](https://forms.gle/4s1u9rm44pBa3KSp6)
- [Cuestionario](https://forms.gle/JVkZFTH3kYFPBqKX9)
- [Soluciones](#) de los ejercicios 1, 2 y 3 en repositorio [learn-react](https://github.com/cesarlpb/learn-react/tree/cdm)

## Preguntas de desarrollo

1. Usando Node crea un endpoint que devuelva todos los registros de un objeto en formato JSON. Este endpoint debe devolver todos los elementos de una lista si no se recibe parámetro “id” y solo un objeto o el primero que encuentre en la lista si recibe id. ¿Cómo podríamos añadir un filtro a la lista para buscar por un campo de los objetos del array?

```
/*
* Podéis usar este archivo como plantilla para el ejercicio 1 del examen
* Podéis cambiar el resto del código o colocar la solución entre las líneas indicadas
* Importante: aseguraos de que la solución ejecuta correctamente con "node server.js"
*/

/* No editar */
const express = require('express');
const app = express()

// Importar body-parser para habilitar req.body en middleware
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const cors = require('cors') // Módulo que permite requests de otro origen
app.use(cors()) // Aplicamos el módulo a la app

const posts = [
  {"id": 1, "title": "Post 1 de ejemplo", "content": "Contenido del post 1", tags: "ejemplo, post, api"},
]
/* No editar */
  
/* No editar */
app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h2>Endpoints: GET en "/posts" y POST en "/posts"</h2>');
});
app.get('/posts', (req, res) => {
  res.json(posts)
});
/* No editar */
/* Solución aquí */
app.post('/posts', (req, res) => {
  let nuevoPost = req.body // objeto
  posts.push(nuevoPost)
  res.status(201).json(nuevoPost)
});
/* Solución aquí */
/* No editar */
app.listen(3000, () => {console.log("Servidor en ejecución en http://localhost:3000")});
/* No editar */
```

3. Usando **React**, crea un formulario para que un usuario pueda crear un post. El post puede tener campos como título, contenido (texto) y etiquetas. Este post se podrá editar y revisar antes de enviar el formulario. Una vez creado el post, se debe poder enviar haciendo click. Si falta algún campo debe salir una aviso acorde y cuando se reciba el post correctamente en el backend, debemos notificar al usuario sobre esto.

4. Siguiendo el ejercicio anterior, se debe recibir el post creado en un endpoint, método POST, de Node. Este endpoint debe notificar sobre la creación del post en el response. Además, el endpoint enviará cualquier información necesaria para que el usuario pueda ver ese post creado. Adicionalmente, el usuario debería poder editar el post una vez creado. Este ejercicio depende del anterior y debe ir acorde al mismo para funcionar.
