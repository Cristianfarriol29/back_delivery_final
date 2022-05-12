const Order = require('./orders.model');
const { setError } = require('../../utils/error/error');

const getAll = async (req, res, next) => {
    try {
        // const orders = await Order.find().populate('users');
        const orders = await Order.find()
        res.status(200).json(orders);
    } catch (error) {
        return next(setError(400, 'Cannot get orders.'));
    }
}

const getOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        return next(setError(400, 'Cannot get order.'));
    }
}

const postOne = async (req, res, next) => {
    try {
        const order = new Order(req.body);
        // if (req.file) order.img = req.file.path;
        const orderDB = await order.save();
        return res.status(201).json(orderDB);
    } catch (error) {
        return next(setError(400, 'Cannot post order'));
    }
}

const patchOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const order = new Order(req.body);
        // if (req.file) order.img = req.file.path;
        order._id = id;
        const updateOrder = await Order.findByIdAndUpdate(id, order);
        return res.status(200).json(updateOrder);
    } catch (error) {
        return next(setError(400, 'Cannot update order'));
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const {id} = req.params;
        const order = await Order.findByIdAndDelete(id);
        // if (order.img) deleteImgCloudinary(order.img);
        return res.status(200).json(order);
    } catch (error) {
        return next(setError(400, 'Cannot delete order'))
    }
}

module.exports = { getAll, getOne, postOne, patchOne, deleteOne};
