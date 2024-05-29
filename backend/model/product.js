const mongoose = require("mongoose")
const {Schema} = mongoose

const productSchema = new Schema({
    name: String,
    discription: String,
    image: String,

});

module.exports = mongoose.model("Product", productSchema)