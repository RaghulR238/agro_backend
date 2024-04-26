import express from "express";
import routerFarmer from "./routees/userRoutes.js";
import mongoose from "mongoose";
import productRouter from "./routees/productRoute.js";
import plantRouter from "./routees/plantRoute.js";
import { verifyToken } from "./jwt.js";
import cors from "cors";
const app=express();

app.use(express.json());
app.get("/",(req,res)=>
{
    console.log("Hello agro");
    res.send("Hello agro friends")
})
app.use(cors({  
    origin:"*"    // provide which client have access for mangoDB 
    // * to allow all website // localhost:3000 to allow that only
}));

app.use("/user",routerFarmer);
app.use("/product",verifyToken,productRouter);
app.use("/plant",verifyToken,plantRouter);


async function connect()
{
    await mongoose.connect("mongodb+srv://717821l238:WStW1oqCS3LPNPBw@cluster0.ryc0weh.mongodb.net/?retryWrites=true&w=majority&&dbname=agro");
    console.log("DB Connected");
} 

app.listen(3001,()=>
{
    connect();
    console.log("Server Started");
})