const Question = require('../models/Question');

exports.createQuestion = async (req, res) => {
    try {
        const { question, options, correctAnswer } = req.body;

        const newQuestion = new Question({ question, options, correctAnswer });
        await newQuestion.save();

        res.status(201).json({ message: 'Question created successfully!', newQuestion });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create question!', error: error.message });
    }
};

exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch questions!', error: error.message });
    }
};
