const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt')
const User=require('../models/User');


router.post('/',async (req,res)=>{
    try{
        let tryUser=await User.findOne({email:req.body.email})
        if(tryUser){
            res.json({message:'exist'})
        } else {
            bcrypt.hash(req.body.password,10,async(err,hashedPassword)=>{
                if(err){
                    console.log(err)
                } else {
                    const myPost = new User({
                        email: req.body.email,
                        password:hashedPassword,
                        username:req.body.name,
                        firstName:req.body.firstName,
                        lastName:req.body.lastName,
                    });
                const savedPost = await myPost.save();
                res.json({message:'ok',user:req.body.name});
            }})
        }
    } catch(err) {
        res.json({message:err});
    }
})
router.put('/:postId',async (req,res)=>{
    try{
        const findUser=await User.findOne({username:req.params.postId})
        let id=findUser._id
        if(req.body.pw===req.body.pwagain&&req.body.pw!==""){
            bcrypt.hash(req.body.pw,10,async(err,hashedPassword)=>{
                if(err){
                    console.log(err)
                }
                const updateUser= await User.update(
                    {_id:id},
                    {$set:{
                        username:req.body.username,
                        email:req.body.email,
                        firstName:req.body.firstName,
                        lastName:req.body.lastName,
                        password:hashedPassword
                    }
                })
                res.json({message:'updated',username:req.body.username})
            })
        } else {
            const updateUser= await User.update(
                {_id:id},
                {$set:{
                    username:req.body.username,
                    email:req.body.email,
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                }
            })
            res.json({message:'updated',username:req.body.username})
        }
    } catch(err) {
        res.json({message:'error'});
    }
})



module.exports = router;