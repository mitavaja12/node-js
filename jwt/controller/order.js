const Order = require("../models/order");

exports.create = async (req, res) => {
  let user = req.user.id;
  let { foods } = req.body;
  let order = await Order.create({ foods: foods, user: user });
  res.send(order);
};

exports.getAll = async (req, res) => {
  let orders = await Order.find().populate("foods", "title");
  res.send(orders);
};

exports.getAllOrderByUser = async (req, res) => {
  let user = req.user.id;
  let orders = await Order.find({ user }).populate("foods");
  res.send(orders);
};