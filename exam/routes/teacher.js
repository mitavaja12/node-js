const express = require('express');
const { viewStudents } = require('../controllers/teacher.controller');
const { authenticate, authorizeRole } = require('../middleware/auth');
const router = express.Router();

router.get('/view-students', authenticate, authorizeRole(['teacher']), viewStudents);

module.exports = router;
