const jwt = require('jsonwebtoken')
const dotenv=require('dotenv')
const User=require('../models/User');
dotenv.config();




module.exports=async(req,res,next)=>{
    try {
        const token = req.headers.cookie.split(';')[0].split('=')[1]
        if(!token){
            res.status(401).json({message:'Access denied'})
        } else{
            try {
                const verified = jwt.verify(token,process.env.TOKEN_SECRET)
                const checkedUser=await User.findOne({_id:verified._id})
                if(checkedUser.username===req.params.postId){
                    next()
                } else {
                    res.status(401).send({message:'Access denied'})
                }
            } catch (error) {
                res.status(400).json({message:'Invalid token'})
            }
        }
    } catch (error) {
        res.status(401).send({message:'Access denied'})
    }
}