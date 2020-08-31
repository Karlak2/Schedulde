const router=require('express').Router()
const fs=require('fs-extra')
const User=require('../models/User')

router.post('/', async (req,res)=>{
    try{
        if(req.body.rb==='login'){
            const li=await fs.readFile('public/fragments/login.html')
            res.send(li)
        }
        if(req.body.rb==='reg'){
            const ri=await fs.readFile('public/fragments/registration.html')
            res.send(ri)
        }
        if(req.body.rb==='account'){
            const ai=await fs.readFile('public/fragments/account.html')
            res.send(ai)
        }
        if(req.body.rb==='account-client'){
            const aci=await fs.readFile('public/fragments/account_client.html')
            res.send(aci)
        }
        if(req.body.rb==='newschedule'){
            const nsch=await fs.readFile('public/fragments/manageschedule.html')
            res.send(nsch)
        }
    } catch(err){
        res.send(err)
    }
});
router.get('/:postId', async (req,res)=>{
    try{
        const user=await User.findOne({username:req.params.postId})
        console.log(user)
        res.json({
            email:user.email,
            firstName:user.firstName,
            lastName:user.lastName,
            username:user.username,
        })
    } catch(err){
        res.send(err)
    }
});


module.exports=router