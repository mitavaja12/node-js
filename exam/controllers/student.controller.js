const User = require('../models/user.model');

exports.viewTeacherDetails = async (req, res) => {
  try {
    const student = await User.findById(req.user.id).populate('assignedStudents');
    if (!student || student.role !== 'student') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const teacher = student.assignedStudents[0];
    res.json(teacher || { message: 'No teacher assigned' });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teacher details', error: error.message });
  }
};
