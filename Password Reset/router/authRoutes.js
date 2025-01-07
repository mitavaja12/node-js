const express = require('express');
const { signup, login, resetPassword } = require('../controllers/authController');

const router = express.Router();

router.get('/login', (req, res) => res.sendFile(process.cwd() + '/views/login.ejs'));
router.get('/signup', (req, res) => res.sendFile(process.cwd() + '/views/signup.ejs'));
router.get('/reset', (req, res) => res.sendFile(process.cwd() + '/views/reset.ejs'));

router.post('/signup', signup);
router.post('/login', login);
router.post('/reset', resetPassword);

module.exports = router;
