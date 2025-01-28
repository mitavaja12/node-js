const User = require('../models/user.model');

exports.viewStudents = async (req, res) => {
  try {
    const teacher = await User.findById(req.user.id).populate('assignedStudents');
    if (!teacher || teacher.role !== 'teacher') {
      return res.status(403).json({ message: 'Access denied' });
    }
    res.json(teacher.assignedStudents);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  }
};
