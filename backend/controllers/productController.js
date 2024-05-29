const Product = require("../model/product");

let productController = async (req, res) => {

    const { name , discription} = req.body;

    console.log(req.file);

        let product = new Product({
            name: name,
            discription : discription,
            image: `/uploads/${req.file.filename}`,
        });
        
        product.save()
        res.send({success : "Product created successfully"})

};

module.exports = productController