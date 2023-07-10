const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const posts = [
  {id: 1, title: "Título", content: "Contenido"}
]

app.get("/", (req, res) => {
  res.json(posts)
})
app.post("/", (req, res) => {
  let nuevoPost = req.body // objeto
  posts.push(nuevoPost)
  res.status(201).json(nuevoPost)
})

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000")
})