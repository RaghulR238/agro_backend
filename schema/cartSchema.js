import mongoose from "mongoose"

const Cart=mongoose.Schema({
    user_id:{
        type:String
    },
    image:{
        type:String
    },
    productName:{
        type:String
    },
    productprice:{
        type:Number
    },
    productKg:{
        type:Number
    },
})

export default mongoose.model("Cart",Cart);