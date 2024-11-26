const express = require('express');

const dbconnection = require('./config/db');

const productRouter = require('./routes/product.route')

const app = express();

app.use(express.json());

app.use('/product', productRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
