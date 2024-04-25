import  JsonWebTokenError  from "jsonwebtoken";

const accessKey="bhidsishfvzdjskfvsuigfuiabauevbkb";
export function generateToken(userDetails)
{
    return JsonWebTokenError.sign(userDetails,accessKey);
}

export function verifyToken(req,res,next)
{
    const token=req.headers.authorization;
    if(token)
    {
        let accessToken=token.split(" ");
        accessToken=accessToken[1]?accessToken[1]:accessToken[0];
        console.log(accessToken);
        JsonWebTokenError.verify(accessToken,accessKey,(error,userDetails)=>{
            if(error)
            {
                res.status(404).json({userDetails:
                    userDetails
                });
            }
            else{
                next();
            }
        })
    }
    else{
        res.status(404).send("Access Token Not Found");
    }
}