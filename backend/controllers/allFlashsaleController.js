const flashsale = require('../model/flashSaleModel')

let allFlashsaleController = async (req, res) => {

    let data = await flashsale.find()
    
    res.send(data)
}

module.exports = allFlashsaleController;