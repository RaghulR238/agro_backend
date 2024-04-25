import mongoose from "mongoose";

const Product=mongoose.Schema({
    
    user_id:{
        type:String,
        unique:false
    },
    image:{
        type:String,
        required:true
    },
    productName:{
        type:String
    },
    productKg:{
        type:Number
    },
    productprice:{
        type:Number
    },
    delivery:{
        type:Boolean
    },
    details:{
        type:String
    },
    deliveryPlace:{
        type:String
    },
    productLocation:{
        type:String
    }
},{
    timestamps:true
}
)

export default mongoose.model("Product",Product);