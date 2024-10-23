const {default:mongoose} = require('mongoose')

const productSchema = new mongoose.Schema ({
    title : String,
    price : Number,
    image : String,
    userId:String
})

const product = mongoose.model('product',productSchema)

module.exports=product