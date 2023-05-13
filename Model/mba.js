const mongoose = require('mongoose')

const mbaSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }

   
},{timestamps:true})


mongoose.models ={};

// create collection
const Usermba=mongoose.model.mba || mongoose.model('mba', mbaSchema)
//                                   ^collection name

module.exports=Usermba