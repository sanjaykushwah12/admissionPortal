const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    image:{
        public_id:{
           type:String,
          },
        url:{
        type:String,
       }}
   
},{timestamps:true})

mongoose.models ={};

// create collection
const UserModel=mongoose.model.userreg || mongoose.model('userreg', userSchema)
//                                                          ^collection name

module.exports=UserModel