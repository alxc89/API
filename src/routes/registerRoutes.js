const express = require("express");

const routes = express.Router();

const registerController = require("../controllers/registerController");

routes.get("/register/", registerController.index);
routes.get("/register/:id", registerController.show);
routes.post("/register/", registerController.store);
routes.put("/register/:id", registerController.update);
routes.delete("/register/:id", registerController.destroy);

module.exports = routes;
