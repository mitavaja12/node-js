const express = require('express')

const dbconnection = require('./config/db')

const userRouter = require('./routes/user.routes')

const productRouter = require('./routes/product.routes')

const app = express()

app.use(express.json())

app.use('/user', userRouter)

app.use('/product', productRouter)

app.listen(8090, () => {
    console.log('listining on http://localhost:8090')
    bdconnection()
})