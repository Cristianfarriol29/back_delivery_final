const beverageRoutes = require('express').Router();
const { isAdmin, isBasic, isStore } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updatefile.middleware');

const { getAll, getOne, postOne, patchOne, deleteOne} = require('./beverages.controller');

beverageRoutes.get('/', getAll);
beverageRoutes.get('/:id', getOne);
beverageRoutes.post('/', [isAdmin], upload.single('img'), postOne);
beverageRoutes.patch('/:id', [isAdmin], upload.single('img'), patchOne);
beverageRoutes.delete('/:id', [isAdmin], deleteOne);

module.exports = beverageRoutes;