
// importing needed dependecies and files

import mongoose from "mongoose";

// developing schemas with proper validations

const productSchema = new mongoose.Schema({
          
    product_name :{
        type:String,
        required:[true , "Product name is required*"],
        minLength:2
    },
    imageUrl : {
        type:String,
        required:[true , "Image of the product is required*"]
    },
    description:{
        type:String,
    },
    price : {
        type:String,
        required:[true, "Need to enter price value*"],
        min:0
    },
    ratings : {
        type:Number,
        min:0,
        max:5,
        default:0
    },
    category :{
        type:String
    },
    stock : {
        type:Number,
        required:[true, "Stock value is required*"]
    }
    

})

// creating a model

const ProductsModel= mongoose.model('Products', productSchema);

// exporting 
export default ProductsModel;