import { category } from "./category.model"

const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    description : {
        type : String,
        required : true,

    } ,
    name : {
        type : String,
        required : true,
    }  ,
    price : {
        type : Number,
        default : 0 ,
    } ,
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "category",
        required :true ,
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    }




},
{timestamps :true})

export const product  = mongoose.model('product' , productSchema)
