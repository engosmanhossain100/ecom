const Cart = require("../model/cartModel");

let cartController = async (req, res) => {
    try {
        const { productId, userId, quantity } = req.body;

        let existingCart = await Cart.findOne({ productId: productId, userId: userId });

        if (existingCart) {
            if (req.query.type) {
                if (req.query.type == "plus") {
                    await Cart.findByIdAndUpdate({ _id: existingCart._id }, { quantity: existingCart.quantity + 1 });
                } else {
                    if (existingCart.quantity > 1) {
                        await Cart.findByIdAndUpdate({ _id: existingCart._id }, { quantity: existingCart.quantity - 1 });
                    } else {
                        await Cart.findByIdAndDelete(existingCart._id);
                    }
                }
            } else {
                await Cart.findByIdAndUpdate({ _id: existingCart._id }, { quantity: existingCart.quantity + 1 });
            }

            res.send({ success: "Cart updated Successfully" });

        } else {
            let cart = new Cart({
                productId: productId,
                userId: userId,
                quantity: quantity ? quantity : 1
            });
            await cart.save();
            res.send({ success: "Cart Added Successfully" });
        }
    } catch (error) {
        res.status(500).send({ error: "An error occurred while processing your request." });
    }
};

module.exports = cartController;
