const mongoose =require('mongoose')
const url = "'mongodb://0.0.0.0:27017/AdmissionPortal'"
const live_uri = "mongodb+srv://sanjaykushwah2020:AEIdHmsJHcaa0jnj@admissionportal.zhqm9tr.mongodb.net/?retryWrites=true&w=majority"


const connectDB =()=>{
      return mongoose.connect(live_uri)

      .then(()=>{
        console.log('connection successfully')
      })
      .catch((err)=>{
         console.log(err)
      })
}
module.exports=connectDB