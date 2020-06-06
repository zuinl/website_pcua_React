const express = require('express')
const app = express()
const consign = require('consign')
const port = 3000
const { sportModel } = require('./db/Models')

consign()
    .include('./config/Middlewares.js')
    .then('./api')
    .then('./config/Routes.js')
    .into(app)

app.db = { sportModel }

app.listen(port, () => {
    console.log('Backend executando')
})