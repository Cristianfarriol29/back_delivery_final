const paymentRoutes = require('express').Router();
const {checkOut} = require('./payment.controller');


paymentRoutes.post('/', checkOut);


module.exports = paymentRoutes;