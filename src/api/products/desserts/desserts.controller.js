const Dessert = require('./desserts.model');
const { setError } = require('../../../utils/error/error');
const {deleteImgCloudinary} = require('../../../middlewares/deletefile.middleware');

const getAll = async (req, res, next) => {
    try {
        const desserts = await Dessert.find();
        res.status(200).json(desserts);
    } catch (error) {
        return next(setError(400, 'Cannot get desserts.'));
    }
}

const getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const dessert = await Dessert.findById(id);
        res.status(200).json(dessert);
    } catch (error) {
        return next(setError(400, 'Cannot get dessert.'));
    }
}

const postOne = async (req, res, next) => {
    try {
        const dessert = new Dessert(req.body);
        if (req.file) dessert.img = req.file.path;
        const dessertDB = await dessert.save();
        return res.status(201).json(dessertDB);
    } catch (error) {
        return next(setError(400, 'Cannot post dessert'));
    }
}

const patchOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const dessert = new Dessert(req.body);
        if (req.file) dessert.img = req.file.path;
        dessert._id = id;
        const updateDessert = await Dessert.findByIdAndUpdate(id, dessert);
        return res.status(200).json(updateDessert);
    } catch (error) {
        return next(setError(400, 'Cannot update dessert'));
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const dessert = await Dessert.findByIdAndDelete(id);
        if (dessert.img) deleteImgCloudinary(dessert.img);
        return res.status(200).json(dessert);
    } catch (error) {
        return next(setError(400, 'Cannot delete dessert'))
    }
}

module.exports = { getAll, getOne, postOne, patchOne, deleteOne};