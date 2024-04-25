;
import { generateToken } from "../jwt.js";
import User from "../schema/userSchema.js";

export async function userSignUp(req,res)
{
    console.log("Creating a new User");
    const user=new User(req.body);
    console.log(req.body);
    try{
        const userDetails=await user.save();
        console.log("user created in DB");
        console.log(userDetails);
        const dataToClient={userName:userDetails.userName,email:userDetails.email,userType:userDetails.userType,_id:userDetails._id};
        const accessToken=generateToken(dataToClient);
        res.status(200).json({
            "userDetails":dataToClient,"accessToken":accessToken
        });
    }
    catch(er)
    {
        console.log("Unable to create new user");
        res.status(404).send(er);
    }
}

export async function login(req,res)
{
    const filter={email:req.body.email,password:req.body.password,userType:req.body.userType};
    const filteredData=await User.find(filter);
    console.log(req.body);
    if(filteredData.length==0)
    {
        console.log("No succh user available");
        res.status(404).send("Invalid username or password");
    }
    else
    {
        const dataToClient={userName:filteredData[0].userName,email:filteredData[0].email,userType:filteredData[0].userType,_id:filteredData[0]._id}
        const accessToken=generateToken(dataToClient);
        res.status(200).json({
            "userDetails":dataToClient,"accessToken":accessToken
        });
    }
}