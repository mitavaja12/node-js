const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskcontroller');
const { verifyToken, checkRole } = require('../middleware/authMiddleware');

router.use(verifyToken);
router.get('/', taskController.getUserTask);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;