const express = require('express');
const router = express.Router();
const { createExam, updateExam, deleteExam } = require('../controllers/examController');

router.post('/', createExam);          
router.put('/:examId', updateExam);   
router.delete('/:examId', deleteExam);

module.exports = router;