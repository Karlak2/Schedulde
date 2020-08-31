const mongoose=require('mongoose');


const baseSchema=mongoose.Schema({
    teamnumber: {
        type:Number,
        required:true
    },
    schedtype: {
        type:String,
        required:true
    },
    roundnum: {
        type:String,
        required:true
    }

});

module.exports = mongoose.model('basics' , baseSchema);