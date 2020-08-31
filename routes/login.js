const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt')
const User=require('../models/User');
const jwt=require('jsonwebtoken')


router.post('/',async (req,res)=>{
    try{
        let tryUser=await User.findOne({email:req.body.email})
        if(!tryUser){
            res.json({message:'Email or password is incorrect!'})
        } else {
            const compare=await bcrypt.compareSync(req.body.password,tryUser.password)
            if(compare){
                let token =jwt.sign({_id:tryUser._id},process.env.TOKEN_SECRET)
                res.header('token',token).send({message:'ok',token:token,username:tryUser.username})
            } else {
                res.send({message:'Email or password is incorrect!'})
            }
        }
    } catch(err) {
        res.json({message:err});
    }
})



module.exports = router;