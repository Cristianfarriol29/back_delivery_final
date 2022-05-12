const Pizza = require("./pizzas.model");
const { setError } = require("../../../utils/error/error");
const { deleteImgCloudinary } = require("../../../middlewares/deletefile.middleware");

const getAll = async (req, res, next) => {
  try {
    const pizza = await Pizza.find();
    res.status(200).json(pizza);
  } catch (error) {
    return next(setError(400, "Cannot get pizzas."));
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pizza = await Pizza.findById(id);
    res.status(200).json(pizza);
  } catch (error) {
    return next(setError(400, "Cannot get pizza."));
  }
};

const postOne = async (req, res, next) => {
  try {
    const pizza = new Pizza(req.body);
    if (req.file) pizza.img = req.file.path;
    const pizzaDB = await pizza.save();
    console.log(pizzaDB);
    return res.status(201).json(pizzaDB);
  } catch (error) {
    return next(setError(400, "Cannot post pizza"));
  }
};

const patchOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pizza = new Pizza(req.body);
    if (req.file) pizza.img = req.file.path;
    pizza._id = id;
    const updatePizza = await Pizza.findByIdAndUpdate(id, pizza);
    return res.status(200).json(updatePizza);
  } catch (error) {
    return next(setError(400, "Cannot update pizza"));
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pizza = await Pizza.findByIdAndDelete(id);
    if (pizza.img) deleteImgCloudinary(pizza.img);
    return res.status(200).json(pizza);
  } catch (error) {
    return next(setError(400, "Cannot delete pizza"));
  }
};

module.exports = { getAll, getOne, postOne, patchOne, deleteOne };