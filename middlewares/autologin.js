const jwt = require('jsonwebtoken')
const dotenv=require('dotenv')
const User=require('../models/User');
dotenv.config();

module.exports=async(req,res,next)=>{
    console.log("Im try at least")
    try {
        console.log(req.headers.cookie)
        const token = req.headers.cookie.split(';')[0].split('=')[1]
        if(!token){
            next()
        } else{
                const verified = jwt.verify(token,process.env.TOKEN_SECRET)
                console.log(verified, ' in autologin')
                const checkedUser=await User.findOne({_id:verified._id})
                console.log(checkedUser)
                    res.redirect(`/user/${checkedUser.username}`)
        }
    } catch (error) {
        next()
    }
}