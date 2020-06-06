const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sportSchema = new Schema({
    _id: Number,
    title: String,
    time: String,
    project: String,
    address: String,
    instructor: String
})

module.exports = { sportSchema }