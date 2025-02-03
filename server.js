const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');


app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB()
});