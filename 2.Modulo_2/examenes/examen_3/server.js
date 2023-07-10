const express = require('express')
const app = express()

const posts = [
  {id: 1, title: "Título", content: "Contenido"}
]

app.get("/", (req, res) => {
  res.json(posts)
})

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000")
})