const express = require('express');
const { viewTeacherDetails } = require('../controllers/student.controller');
const { authenticate, authorizeRole } = require('../middleware/auth');
const router = express.Router();

router.get('/view-teacher', authenticate, authorizeRole(['student']), viewTeacherDetails);

module.exports = router;
