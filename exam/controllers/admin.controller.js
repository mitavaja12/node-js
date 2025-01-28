const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createAccount = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    if (!['teacher', 'student'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error creating account', error: error.message });
  }
};

exports.viewDetails = async (req, res) => {
  try {
    const allUsers = await User.find(); 
    const filteredUsers = allUsers.filter(user => user.role == 'teacher' || user.role == 'student'); 
    res.json(filteredUsers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching details', error: error.message });
  }
};


exports.assignTeacherToStudent = async (req, res) => {
  try {
    const { teacherId, studentId } = req.body;

    const teacher = await User.findById(teacherId);
    const student = await User.findById(studentId);

    if (!teacher || !student || teacher.role !== 'teacher' || student.role !== 'student') {
      return res.status(404).json({ message: 'Invalid teacher or student ID' });
    }

    teacher.assignedStudents.push(studentId);
    await teacher.save();
    res.json({ message: 'Teacher assigned to student' });
  } catch (error) {
    res.status(500).json({ message: 'Error assigning teacher', error: error.message });
  }
};
