const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const fs=require('fs-extra');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser')
const dotenv=require('dotenv');
const User=require('./models/User')
const verified=require('./middlewares/jwtcheck')
const jwt=require('jsonwebtoken')

dotenv.config();
app.use(cookieParser())
app.use(express.static("public"))

app.use(bodyParser.json());
const regPosts=require('./routes/registration');
const loginPosts=require('./routes/login');
const dataposts=require('./routes/data');
app.use('/registration',regPosts);
app.use('/login',loginPosts);
app.use('/data',dataposts);


app.get('/user/:postId',verified,async(req,res)=>{
    try {
        const user=await fs.readFile('public/schedule.html','utf-8')
        res.send(user)
    } catch (error) {
        console.log(error)
    }
    
})

app.get('/unlock',async(req,res)=>{
    try {
        const token = req.headers.cookie.split(';')[0].split('=')[1]
        const user=await User.findById(jwt.verify(token,process.env.TOKEN_SECRET)._id)
        res.json({user:user.username})
    } catch (error) {
        res.status(401).json({message:'User not found'})
    }
})


mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    },
    ()=>{
        console.log("CONNECTED DB");
    });
    

app.listen(3000);