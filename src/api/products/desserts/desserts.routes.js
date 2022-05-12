const dessertRoutes = require('express').Router();
const { isAdmin, isBasic, isStore } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updatefile.middleware');

const { getAll, getOne, postOne, patchOne, deleteOne} = require('./desserts.controller');

dessertRoutes.get('/', getAll);
dessertRoutes.get('/:id', getOne);
dessertRoutes.post('/', [isAdmin], upload.single('img'), postOne);
dessertRoutes.patch('/:id', [isAdmin], upload.single('img'), patchOne);
dessertRoutes.delete('/:id', [isAdmin], deleteOne);

module.exports = dessertRoutes;