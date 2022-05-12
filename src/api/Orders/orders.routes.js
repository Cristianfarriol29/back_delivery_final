const orderRoutes = require('express').Router();
const { isAdmin, isBasic, isStore } = require('../../middlewares/auth.middleware');
const { getAll, getOne, postOne, patchOne, deleteOne} = require('./orders.controller');

orderRoutes.get('/', [isBasic], getAll);
orderRoutes.get('/:id', [isStore], getOne);
orderRoutes.post('/', [isStore], postOne);
orderRoutes.patch('/:id', [isStore], patchOne);
orderRoutes.delete('/:id', [isStore], deleteOne);

module.exports = orderRoutes;