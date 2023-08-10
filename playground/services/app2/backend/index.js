const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`Hello World, with port ${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})