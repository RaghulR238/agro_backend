import mongoose from "mongoose";

const User=mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type: String,
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        unique:true
    },
    userType:{
        type:String,
    },
    password:{
        type:String
    },
    contactNumber:{
        type:Number
    }
})

export default mongoose.model("User",User);