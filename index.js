const express = require('express')
const app = express()
const consign = require('consign')
const path = require('path')
const port = process.env.PORT || 3000
const { sportModel } = require('./db/Models')

app.use(express.static(path.join(__dirname, 'react-ui/build')))

consign()
    .include('./config/Middlewares.js')
    .then('./api')
    .then('./config/Routes.js')
    .into(app)

app.db = { sportModel }

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/react-ui/build/index.html'))
})

app.listen(port, () => {
    console.log('Backend executando na porta ' + port)
})