const FlashSale = require("../model/flashSaleModel");

async function flashSaleController (req, res) {

    const {ftime, productId} = req.body;

    // let arr = idlist.split(",");

    let existing = await FlashSale.find()

    if (existing.length > 0) {
    
       await FlashSale.findByIdAndUpdate({_id:existing[0]._id}, {time:ftime})

    } else {
        let time = new FlashSale ({
            time: ftime,
            productId : productId
        }).save()
    }

}

module.exports = flashSaleController
