const mongoose =require('mongoose')


const connectDB =()=>{
      return mongoose.connect('mongodb://0.0.0.0:27017/AdmissionPortal')

      .then(()=>{
        console.log('connection successfully')
      })
      .catch((err)=>{
         console.log(err)
      })
}
module.exports=connectDB