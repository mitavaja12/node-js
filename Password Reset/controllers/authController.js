const bcrypt = require('bcrypt');
const { userModel } = require('./path/to/userModel');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = userModel.getUserByEmail(email);

  if (existingUser) {
    return res.send('User already exists');
  }

  const saltRounds = 10; 
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  userModel.addUser({ email, password: hashedPassword });
  res.send('Signup successful');
};


const login = async (req, res) => {
  const { email, password } = req.body;
  const user = userModel.getUserByEmail(email);

  if (!user) {
    return res.send('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    res.send(`Welcome ${email}`);
  } else {
    res.send('Invalid password');
  }
};

const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  const user = userModel.getUserByEmail(email);

  if (!user) {
    return res.send('User not found');
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  userModel.updateUserPassword(email, hashedPassword);
  res.send('Password reset successful');
};

module.exports = { signup, login, resetPassword };