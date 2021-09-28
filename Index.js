const express = require('express')
const app = express()


const { gamesOwned } = require('./Games')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
