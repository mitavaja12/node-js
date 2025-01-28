const express = require('express');
const { createAccount, viewDetails, assignTeacherToStudent } = require('../controllers/admin.controller');
const { authenticate, authorizeRole } = require('../middleware/auth');
const router = express.Router();

router.post('/create-account', authenticate, authorizeRole(['admin']), createAccount);
router.get('/view-details', authenticate, authorizeRole(['admin']), viewDetails);
router.post('/assign-teacher', authenticate, authorizeRole(['admin']), assignTeacherToStudent);

module.exports = router;
