// server.js
require('dotenv').config()

const express = require('express')

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello world Version 4')
})

app.listen(() => {
    console.log('Server is up on ' + port)
})
