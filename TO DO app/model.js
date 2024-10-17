const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema({
    modelName: String,
    description: String,
    status: String
})

const model = mongoose.model('model', modelSchema)

module.exports = model