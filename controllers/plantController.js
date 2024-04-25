import Plant from "../schema/plantHouseSchema.js";

export async function plantUpload(req,res)
{
    const plant=new Plant(req.body);
    try{
        const plantUpload=await plant.save();
        console.log(plantUpload);
        res.status(200).json(plantUpload);
    }
    catch(error)
    {
        console.log("cant upload plant");
        res.status(400).send("cant upload plant");
    }
}