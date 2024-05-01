const mongoose = require("mongoose")
const categoryModel = require("./categoryModel")
const {Schema} = mongoose

const subCategorySchema = new Schema({
    
    name: String,

    status : {
        type : String,
        enum : ["approve","waiting","reject"],
        default : "waiting"
    },

    categoryId:{
        type: Schema.Types.ObjectId,
        ref:"category" 
    }

})

module.exports = mongoose.model("SubCategory", subCategorySchema)