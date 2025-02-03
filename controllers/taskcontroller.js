const Task = require("../models/Task");

exports.getUserTask = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.render("taskList", { tasks });
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description, user: req.user.id });
  await task.save();
  res.redirect("/tasks");
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/tasks");
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/tasks");
};
