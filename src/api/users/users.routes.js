const UserRoutes = require("express").Router();
const { isAdmin, isBasic, isStore } = require("../../middlewares/auth.middleware");
const upload = require("../../middlewares/updatefile.middleware");

const { register, 
    login, 
    logout, 
    getUser, 
    addFavBeverage, 
    addFavDessert, 
    addFavPizza, 
    getAllUsers,
    deleteOneUser,
    patchOneUser
 } = require("./users.controller");

UserRoutes.post("/register", register);
UserRoutes.post("/login", login);
UserRoutes.post("/logout", [isBasic], logout);
UserRoutes.get("/:id", [isBasic], getUser);
UserRoutes.get("/", [isStore], getAllUsers);
UserRoutes.patch("/favBeverages/:id", [isBasic], addFavBeverage);
UserRoutes.patch("/favDesserts/:id", [isBasic], addFavDessert);
UserRoutes.patch("/favPizzas/:id", [isBasic], addFavPizza);
UserRoutes.patch("/:id", [isBasic], upload.single("img"), patchOneUser);
UserRoutes.delete("/:id", [isAdmin], deleteOneUser);

module.exports = UserRoutes;