const Beverage = require('./beverages.model');
const { setError } = require('../../../utils/error/error');
const {deleteImgCloudinary} = require('../../../middlewares/deletefile.middleware');

const getAll = async (req, res, next) => {
    try {
        const beverages = await Beverage.find();
        res.status(200).json(beverages);
    } catch (error) {
        return next(setError(400, 'Cannot get beverages.'));
    }
}

const getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const beverage = await Beverage.findById(id);
        res.status(200).json(beverage);
    } catch (error) {
        return next(setError(400, 'Cannot get beverage.'));
    }
}

const postOne2 = async (req, res, next) => {
    try {
        const beverage = new Beverage(req.body);
        if (req.file) beverage.img = req.file.path;
        const beverageDB = await beverage.save();
        return res.status(201).json(beverageDB);
    } catch (error) {
        return next(setError(400, 'Cannot post beverage'));
    }
}

const postOne = async (req, res, next) => {
    try {
        console.log(req)
        const beverage = new Beverage(req.body);
        if (req.file) beverage.img = req.file.path;
        const beverageDB = await beverage.save();
        return res.status(201).json(beverageDB);
    } catch (error) {
        return next(setError(404, 'It was not possible to create a new book.'))
    }
}

const patchOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const beverage = new Beverage(req.body);
        if (req.file) beverage.img = req.file.path;
        beverage._id = id;
        const updateBeverage = await Beverage.findByIdAndUpdate(id, beverage);
        return res.status(200).json(updateBeverage);
    } catch (error) {
        return next(setError(400, 'Cannot update beverage'));
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const beverage = await Beverage.findByIdAndDelete(id);
        if (beverage.img) deleteImgCloudinary(beverage.img);
        return res.status(200).json(beverage);
    } catch (error) {
        return next(setError(400, 'Cannot delete beverage'))
    }
}

module.exports = { getAll, getOne, postOne, patchOne, deleteOne};