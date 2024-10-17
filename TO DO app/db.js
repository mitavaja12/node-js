
const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')
const dbConnect = async () => {
    await mongoose.connect("mongodb+srv://mitavaja:node@cluster0.ay6rw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}   
console.log("connected to db");
module.exports = dbConnect