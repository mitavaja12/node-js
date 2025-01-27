const { Router } = require("express");

const orderController = require("../controller/order");
const routes = Router();

routes.post("/", orderController.create);
routes.get("/", orderController.getAll);
routes.get("/user-orders", orderController.getAllOrderByUser);

module.exports = routes;