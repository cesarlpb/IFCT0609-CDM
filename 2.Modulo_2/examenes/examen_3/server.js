const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const cors = require('cors') // Módulo que permite requests de otro origen
app.use(cors()) // Aplicamos el módulo a la app

const posts = [
  {id: 1, title: "Título", content: "Contenido"}
]

app.get("/posts", (req, res) => {
  res.json(posts)
})
app.post("/posts", (req, res) => {
  let nuevoPost = req.body // objeto
  posts.push(nuevoPost)
  res.status(201).json(nuevoPost)
})

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000/posts")
})