const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        orderedProducts: { type: Array, required: true, trim: true },
        deliverStatus: { type: String, required: true, trim: true, default: "Accepted"},
        userId: { type: String, required: true, trim: true}, 
        userName: { type: String, trim: true, required: true }, 
        email: { type: String, trim: true, required: true },
        shippingAddress: {type: Object, required: true, trim: true}, 
        transactionId: {type: String, required: true, trim: true}, 
        totalPrice: {type: Number, required: true, trim: true} 
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;