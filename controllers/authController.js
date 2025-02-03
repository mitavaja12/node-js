const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.redirect("/auth/user");
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await user.comparePassword(password))) {
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    res.cookie("token", token);
    return res.redirect("/tasks");
  }
  res.status(401).send("Invalid cre..");
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/auth/login");
};
