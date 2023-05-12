const mongoose = require('mongoose')

const mcaSchema = new mongoose.Schema({
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
    course:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    }
  
   
},{timestamps:true})

// create collection
const Usermca= mongoose.model('mca', mcaSchema)
//                                   ^collection name

module.exports=Usermca