const mongoose = require('mongoose');

const dessertSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true},
        price: { type: Number, required: true, trim: true},
        img: { type: String, required: true, trim: true},
        description: { type: String, required: false, trim: true},
        allergic: { type: Array, required: true, trim: true }
    },
    {
        timestamps: true,
    }
)

const Dessert = mongoose.model('desserts', dessertSchema);

module.exports = Dessert;