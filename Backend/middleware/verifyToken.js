// importing dependencies and files
import jwt from "jsonwebtoken"
import userModel from "../Models/User.model.js";

// middleware
export function verifyToken(req,res,next){
    if(req.headers && req.headers.authorization && req.headers.authorization.split(" ")[0]=="JWT")
        {
            // jwt method to verify the token
        jwt.verify(req.headers.authorization.split(" ")[1], 'secretKey', 
        
        function(err, verifiedToken) {
            // if token is incorrect - error message
            if(err){
                return res.status(404).json({message:"Invalid JWT token.Kindly recheck your token!"})
            }
            // console the verified token
            console.log(verifiedToken,'verifiedToken') 
            
           userModel.findById(verifiedToken.id)
           .then((user)=>{

            console.log(user,"user");
            req.user=user;
            next();


           })
        //    common error if no data there
           .catch((err)=>{
                  return res.status(404).json({message:err.message})
           })
});
    }

    else{
        return res.status(404).json({message:"Token not found"});
    }
}