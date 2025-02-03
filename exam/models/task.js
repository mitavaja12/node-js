const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);