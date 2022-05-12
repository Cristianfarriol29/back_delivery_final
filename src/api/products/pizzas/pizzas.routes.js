const pizzasRoutes = require("express").Router();
const { is } = require("express/lib/request");
const { isAdmin, isBasic, isStore } = require("../../../middlewares/auth.middleware");
const upload = require("../../../middlewares/updatefile.middleware");

const {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne,
} = require("./pizzas.controller");

pizzasRoutes.get("/", getAll);
pizzasRoutes.get("/:id", getOne);
pizzasRoutes.post("/", [isAdmin], upload.single("img"), postOne);
pizzasRoutes.patch("/:id", [isAdmin], upload.single("img"), patchOne);
pizzasRoutes.delete("/:id", [isAdmin], deleteOne);

module.exports = pizzasRoutes;