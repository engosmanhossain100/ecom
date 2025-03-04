const FlashSaleModel = require('../model/flashSaleModel')

async function getFlashsaleController (req,res) {

  let flashSale = await FlashSaleModel.findOne().populate('productId')

    res.send(flashSale)

}

module.exports = getFlashsaleController