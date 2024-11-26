const mongoose  = require('mongoose')

require('dotenv').config()

const dbconnection = async () => {
    await mongoose.connect(process.env.DB_URL)
    console.log('mongodb connection')
}

module.exports = dbconnection