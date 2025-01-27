const { Router } = require("express");
const foodRouter = require("./food");
const userRoutes = require("./user.route");
const orderRoutes = require("./order");
const app = Router();

app.use("/food", foodRouter);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);
module.exports = app;