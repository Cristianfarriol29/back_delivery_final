const { setError } = require('../../utils/error/error');


const Order = require('../Orders/orders.model');




const postStatus = async(req, res, next) => {

    console.log(req.body.state)
    
    try {
        const id = req.body.Id
        const status = req.body.state
        const order = await Order.findOneAndUpdate({_id: id}, {deliverStatus:status} )
        const newOrder = await Order.findOne({_id: id})
        console.log(order)
         console.log("devuelvo 201")
        return res.status(201).json(newOrder);
    } catch (error) {

        console.log(error)
        return next(setError(400, 'Cannot post order'));
    }
}


module.exports = { postStatus };