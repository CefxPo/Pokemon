const express = require('express')
const app = express()
const port = 3000

const pokedex = [
    {id: 1, name :"Bulbizarre", type:"plante", level:5},
    {id: 4, name :"Salamèche", type:"feu", level:5},
    {id: 7, name :"Carapuce", type:"eau", level:5},
    {id: 25, name :"Pikachu", type:"electrik", level:12},
    {id: 39, name :"Rondoudou", type:"fee", level:8},
    {id: 52, name :"Miaouss", type:"normal", level:9},
    {id: 133, name :"Evoli", type:"normal", level:10},
]

//app.get('/:prenom/:nom', (req,res) => {
//  res.send(`Boujour ${req.params.nom} ${req.params.prenom} `)
//})

//app.get('/:prenom/', (req,res) => {
 // res.send(`Boujour ${req.params.prenom}`)
//})


app.get('/api/pokemon', (req,res) =>{
  req.query.limit 
  //Si ma limite existe
  if(req.query.limit){
    //Je teste si ma limite est valide
    if(req.query.limit > 0){
      //on affiche les pokemon qui se trouve dans le pokedex avec le nombre qu'on a mis dans la barre
    res.send(pokedex.slice(0, req.query.limit));
  }
  //sinon on affiche ERREUR
  else{
    res.send('ERREUR')
  }
  //si il n'y a pas de limit, on affiche tout
} 
else{
    res.send(pokedex)
  }
  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})