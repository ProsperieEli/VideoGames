const express = require('express')
const app = express()


const { gamesOwned } = require('./games')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
