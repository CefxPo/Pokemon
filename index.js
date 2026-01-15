const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
   res.send('Hello World!')
  })

  app.get('/galerie', (req,res) => {
    res.send('Galerie!')
  })

app.get('/:prenom/:nom', (req,res) => {
  res.send(`Boujour ${req.params.nom} ${req.params.prenom} `)
})

app.get('/:prenom/', (req,res) => {
  res.send(`Boujour ${req.params.prenom}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})