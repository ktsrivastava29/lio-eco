const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    itemId: String,
    price: Number,
    quantity: Number,
    itemTotal: Number
});

const cartSchema = new mongoose.Schema({
    total: {
        type: Number,
        default: 0
    },
    items: [cartItemSchema]
});

module.exports = mongoose.model('Cart', cartSchema);
