const Userdata = require('../../Model/btech')
const Usermba =require('../../Model/mba')
const Usermca = require('../../Model/mca')

class CourseController{
   
    static btech = async(req,res)=>{
       
        const data = await Userdata.findById(req.params.id)
        res.render('user/course/btech',{bt:data})
    }
    static btechview =async(req,res)=>{
     
      try {

        const data = await Userdata.findById(req.params.id)
        console.log(data)
      //  res.render('user/course/btechview')
        
      } catch (error) {
        console.log(error)
        
      }
    }

    static btechinsert =async(req,res)=>{
           // console.log(req.body)

        try {
            const data = new Userdata({
                fname:req.body.fname,
                email:req.body.email,
                mobile:req.body.mobile,
                dob:req.body.dob,
                gender:req.body.gender,
                address:req.body.address,
                college:req.body.college,
                course:req.body.course,
                branch:req.body.branch,
            })
            await data.save()
            res.redirect('/home')

        } catch (error) {
            console.log(error)
        }
    }

    static mcainsert =async(req,res)=>{
        // console.log(req.body)

     try {
         const data = new Usermca({
             fname:req.body.fname,
             email:req.body.email,
             mobile:req.body.mobile,
             dob:req.body.dob,
             gender:req.body.gender,
             address:req.body.address,
             college:req.body.college,
            
         })
         await data.save()
         res.redirect('/home')

     } catch (error) {
         console.log(error)
     }
 }

 static mbainsert =async(req,res)=>{
    // console.log(req.body)

 try {
     const data = new Usermba({
         fname:req.body.fname,
         email:req.body.email,
         mobile:req.body.mobile,
         dob:req.body.dob,
         gender:req.body.gender,
         address:req.body.address,
         college:req.body.college,
         branch:req.body.branch,
     })
     await data.save()
     res.redirect('/home')

 } catch (error) {
     console.log(error)
 }
}



    static mca = async(req,res)=>{
        const data = await Usermca.findById(req.params.id)
        console.log(data)

        res.render('user/course/mca',{ma:data})
    }
    static mba = async(req,res)=>{
        res.render('user/course/mba')
    }

}
module.exports=CourseController