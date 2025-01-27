const { default: mongoose } = require("mongoose");
const User = require("./user.model");
const Food = require("./food.model");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
  foods: [{ type: mongoose.Schema.Types.ObjectId, ref: Food, required: true }],
});


const Order=mongoose.model("Order", OrderSchema)
module.exports = Order;