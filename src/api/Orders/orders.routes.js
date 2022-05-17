const orderRoutes = require("express").Router();
const {
  isAdmin,
  isBasic,
  isStore,
} = require("../../middlewares/auth.middleware");
const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./orders.controller");

orderRoutes.get("/", getAll);
orderRoutes.get("/:id", getOne);
orderRoutes.post("/", postOne);
orderRoutes.patch("/:id", patchOne);
orderRoutes.delete("/:id", deleteOne);

module.exports = orderRoutes;
