const UserModel = require('../model/userdata')
const Userdata = require('../model/btech')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cloudinary = require('cloudinary').v2;
const Usermca = require('../model/mca')
const Usermba = require('../model/mba')



cloudinary.config({ 
    cloud_name: 'dhcoov5km', 
    api_key: '489687497922462', 
    api_secret: 'h1wxDJXjO9VhHI5jn_7Af1c7_Gc',
   
  });


class FrontController{

    static login = (req,res)=>{
        //res.send( 'login page')
        res.render('loginpage',{message:req.flash('success'),msg:req.flash('error')})
    }

    static home= async(req,res)=>{
   
        try{
            const{name,email, _id}=req.user
            const btech = await Userdata.findOne({course:"Btech"})
            const mca = await Usermca.findOne({course:"MCA"})
            const mba = await Usermba.findOne({course:"MBA"})
            res.render('home',{n:name,bt:btech,mca1:mca,mba1:mba})
        }catch(error){
            console.log(error)

        }
        
    }
    static about =(req,res)=>{
        res.render('about')
    }

    static contact =(req,res)=>{
        res.render('contact')
    }
    
    static register = (req,res)=>{
        res.render('register',{message: req.flash('error')})
        
    }

    static userinsert =async(req,res)=>{
      //console.log('first')
     //  console.log(req.body)
     // console.log(req.files.image)


   const file = req.files.image

     //  console.log(file)

      const image_upload= await cloudinary.uploader.upload(file.tempFilePath,{
        folder:'admission',
        width:400,
      })

    //  console.log(image_upload)


       
       try{
        const{name,email,password,cpassword}=req.body
        const user = await UserModel.findOne({email:email})
       //   console.log(user)
        if(user){
            req.flash('error','Email already exist ')
            res.redirect('/register')
          }
         else{
            if( name && email && password && cpassword){
                 
                if(password==cpassword){
                  
                  try{
                       const hashpassword = await bcrypt.hash(password,10)
                       const result =await UserModel({
                       name:name,
                       email:email,
                       password:hashpassword
                      })
                     await result.save()
                     req.flash('success','*Register Successfully Please Login*')
                     res.redirect('/')


                  }catch(err){
                    console.log(err)
                  }

                }
                else{
                  req.flash('error','Password And Confirm Password doesnot Match ?')
                  res.redirect('/register')
                }
              }
              else{
                req.flash('error','All Field are required ')
                res.redirect('/register')
              }
           
          }
      }catch(err){
          console.log(err)
          }
 
  }
       
       
    static user_verify = async(req,res)=>{
       
      //console.log(req.body)
      try {
        const{email,password}= req.body
        if(email && password){
            const user = await UserModel.findOne({email:email})
            if(user != null){
                const ismatched = await bcrypt.compare(password,user.password)
                if(ismatched){
                    // token generate
                    const token = jwt.sign({id:user._id }, 'sanjaykushwah1999');
                  //  console.log(token)
                    res.cookie('token',token)
                    res.redirect('/home')
                }else{
                    req.flash('error','Email and Password are invalid')
                    res.redirect('/')

                }
            }else{
                req.flash('error','You are not Registered ')
                res.redirect('/')

            }

        }else{
            req.flash('error','All Field are required ')
            res.redirect('/')
          }
      }catch (error) {
        console.log(error)
        
      }
    }

    static logout = async(req,res)=>{
        try{
            res.clearCookie('token')
            res.redirect('/')

        }catch(err){
            console.log(err)

        }
    }
    

    static headerdisplay = async(req,res)=>{
        try {
            const data = await Userdata.find()
          //  console.log(data)
            res.render('user/course/btechview',{fc:data})
        } catch (error) {
            console.log(error)
            
        }
    }

}


module.exports= FrontController