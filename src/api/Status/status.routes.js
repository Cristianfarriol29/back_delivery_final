const statusRoutes = require('express').Router();
const {postStatus} = require('./status.controller');

statusRoutes.post('/',  postStatus);


module.exports = statusRoutes;