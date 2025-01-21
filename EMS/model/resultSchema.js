const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  score: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);