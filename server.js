const express = require('express')
const app = express()


const { gamesOwned } = require('./games')

app.use(cors())
app.get('/gamesOwned', (req, res) => {
 
    res.json(gamesOwned);
})

app.get('/gamesOwned/:id', (req, res) => {
    const titlesOwned = gamesOwned.find(game => gamesOwned.id === Number(req.params.id));
});

module.exports = { app }
