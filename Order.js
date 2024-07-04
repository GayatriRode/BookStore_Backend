// backend/models/order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming User model is defined elsewhere for customers
    required: true
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher.books', // Adjusted to reference nested books within Publisher schema
    required: true
  },
  customerName: { type: String, required: true },
  customerNumber: { type: String, required: true },
  customerEmail: { type: String, required: true },
  price: { type: Number, required: true },
  copiesPurchased: { type: Number, required: true, min: 1 },
  orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
