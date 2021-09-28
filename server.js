const express = require('express')
const app = express()


const { gamesOwned } = require('./games')
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
 
    res.json('hello world');
})

app.get('/gamesOwned', (req, res) => {
 
  res.json(gamesOwned);
})

app.get('/gamesOwned/:id', (req, res) => {
    const titlesOwned = gamesOwned.find(game => gamesOwned.id === Number(req.params.id));
});



module.exports = { app }
