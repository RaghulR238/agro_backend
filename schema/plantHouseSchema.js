import mongoose from "mongoose";

const PlantHouse=mongoose.Schema({
    user_id:{
        type:String
    },
    plantName:{
        type:String
    },
    plantType:{
        type:String
    },
    plantPrice:{
        type:Number
    },
    delivery:{
        type:Boolean
    },
    deliveryPlace:{
        type:String
    },
    location:{
        type:String
    },
    plantKg:{
        type:Number
    }
},{
    timestamps:true
})

export default mongoose.model("PlantHouse",PlantHouse);