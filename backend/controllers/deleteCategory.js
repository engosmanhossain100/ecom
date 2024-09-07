const Category = require("../model/categoryModel");

let deleteCategory = async (req, res) => {

    console.log(req.params);

    await Category.findOneAndDelete(req.params.id);

    
 res.send("delete category")

};

module.exports = deleteCategory;