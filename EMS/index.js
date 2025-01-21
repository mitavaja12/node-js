const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoute=require('./routes/userRoute')
const examRoute=require('./routes/examRoute')
const questionRoute=require('./routes/questionRoute')
const resultRoute=require('./routes/resultRoute');
const DBconnect = require('./config/db');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/exams', examRoute);
app.use('/api/questions', questionRoute);
app.use('/api/results', resultRoute);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  DBconnect
});