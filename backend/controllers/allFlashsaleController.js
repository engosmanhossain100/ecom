const flashsale = require('../model/flashSaleModel')

let allFlashsaleController = async (req, body) => {

    let data = await flashsale.find()
    
    res.send(data)
}

module.exports = allFlashsaleController;