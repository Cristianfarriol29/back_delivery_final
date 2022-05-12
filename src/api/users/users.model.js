const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { validationPassword, validationEmail } = require("../../utils/validators/validators");
const { setError } = require('../../utils/error/error');

const userSchema = new mongoose.Schema({
  role: { type: String, trim: true, required: false, default: 'basic', enum: [ 'basic', 'store', 'admin'] },
  name: { type: String, trim: true, required: true },
  img: { type: String, required: false, trim: true, default:'https://res.cloudinary.com/ds78avdh8/image/upload/v1651919973/Products/eqifvqjtaqjquq74u77l.png'},
  // surname: { type: String, trim: true, required: false },
  password: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  // direction: { type: String, trim: true, required: false },
  // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' ,required: true }],
  /* favBeverages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'beverages', required: false }],
  favDesserts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'desserts', required: false }],
  favPizzas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'pizzas', required: false }], */
});

userSchema.pre("save", function (next) {
  if (!validationPassword(this.password)) {
    return next(setError(404, 'This password is not valid.'));
  }
  if (!validationEmail(this.email)) {
    return next(setError(404, 'This email is not valid.'));
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model("users", userSchema);
module.exports = User;