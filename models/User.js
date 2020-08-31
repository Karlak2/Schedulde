const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    myEvents:{
        type:Array,
        require:true
    },
    eventPartOf:{
        type:Array,
        require:true
    }
})

module.exports=mongoose.model('user',userSchema)