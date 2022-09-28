import { User } from "../model/User.js";
import  jwt  from "jsonwebtoken";



export const isAuthenticated = async(req,res,next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(200).json({
                success:false,
                message:"Login to access this resource",
            });
        }
        // first we have to verify the token which stored in cookies
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        // now we find user 
        const user = await User.findById(decode._id)

        req.user = user;

        next();
    } catch (error) {
        return res.status(200).json({
           success:false,
           message:error.messaage,
        });
    }
}