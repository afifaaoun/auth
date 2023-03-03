const jwt= require('jsonwebtoken')
const userSchema=require('../model/user')

exports.IsAuth=async(req,res,next)=>{
    try{
const token=req.header('authorization')
console.log(token);
        const decoded=jwt.verify(token,process.env.Private_key)
        console.log(decoded);
        if(!decoded){
            return res.status(404).json({msg:'not authorized to be here'})
        }
        const user= await userSchema.findById(decoded.id);
        console.log(user);
        req.user =user;
        next();
    }
    catch{
        res.status(500).json({msg:'you are not allowed to do this'})
        
    }
}