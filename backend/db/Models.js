const mongoose = require('mongoose')
const { sportSchema } = require('./Schemas')

mongoose.connect('mongodb://localhost:27017/pcua', { useNewUrlParser: true, useUnifiedTopology: true })

const sportModel = mongoose.model('Sport', sportSchema)

module.exports = { sportModel }