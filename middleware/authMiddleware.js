import JWT from "jsonwebtoken"
import userModel from "../model/userModel.js"

export const requireSignIn = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }
    try {
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};


export const isAdmin = async(req,res,next)=>{
     try {
        const user = await userModel.findById(req.user._id)
        if(user.role != 1){
             return res.status(401).send({
                success:false,
                message:"unAthourized Access"
             })
        }
        else{
            next();
        }
     } catch (error) {
        console.log(error)
     }
}
