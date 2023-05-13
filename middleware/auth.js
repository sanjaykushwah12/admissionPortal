const jwt = require('jsonwebtoken')
const UserModel = require('../model/userdata')

const user_auth = async(req,res,next)=>{
        try{
          // console.log('hello admin')
       const{token}=req.cookies
      //   console.log(token)
        const verify_token= jwt.verify(token, 'sanjaykushwah1999')
       //  console.log(verify_token)
        const user_data = await UserModel.findOne({ _id: verify_token.id });
        // console.log(user_data);
         req.user = user_data
          next();
       }catch (error) {
         res.redirect('/')
  }
        
};

module.exports= user_auth