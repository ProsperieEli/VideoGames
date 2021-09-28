const express = require('express')
const app = express()
const port = 3000

const { gamesOwned } = require('./Games')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})