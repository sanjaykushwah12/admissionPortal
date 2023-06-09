const mongoose = require('mongoose')

const btechSchema = new mongoose.Schema({
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
const Userdata= mongoose.model.btech || mongoose.model('btech', btechSchema)
//                                                       ^collection name

module.exports=Userdata