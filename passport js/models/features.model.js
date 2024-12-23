const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
    name: String,
    description: String,
    createdAt: Date,
});

const feature = mongoose.model('feature',featureSchema)

module.exports=feature