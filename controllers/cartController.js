const Cart = require('../models/Cart');

const addToCart = async (req, res) => {
    const { itemId, price, quantity } = req.body;

    if (!itemId || !price || !quantity) {
        return res.status(400).json({ error: 'Item ID, price, and quantity are required' });
    }

    try {
        let cart = await Cart.findOne();

        if (!cart) {
            cart = new Cart();
        }

        const itemTotal = price * quantity;
        cart.total += itemTotal;
        cart.items.push({ itemId, price, quantity, itemTotal });

        await cart.save();

        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    addToCart
};
