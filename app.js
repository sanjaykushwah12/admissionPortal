const express =require('express')

const app = express()
const port = 4000
const connectDB = require('./db/ConnectDB')
const fileUpload = require("express-fileupload");
const cloudinary = require('cloudinary');
const bodyParser=require('body-parser')
const session = require('express-session')
const MemoryStore=require('memorystore')(session)
const flash = require('connect-flash');
const cookieParser = require('cookie-parser')
const user_auth = require('./middleware/auth')

const CourseController = require('./controller/User/CourseController')
const FrontController = require('./controller/FrontController')

// set ejs engine 
app.set('view engine','ejs')

// connection to mongo DB
connectDB()

// static file path
app.use(express.static('public'))


// body parser
//app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))

// get token 
app.use(cookieParser())

// app.use(session({
//   secret: 'secret',
//   cookie: { maxAge: 60000 },
//   resave: false,
//   saveUninitialized: false,
  
// }));


app.use(session({
  // secret: 'secret',
  // cookie: { maxAge: 60000 },
  // resave: false,
   saveUninitialized: false,
  cookie: { maxAge: 86400000 },
  store: new MemoryStore({
    checkPeriod: 86400000 // prune expired entries every 24h
  }),
  resave: false,
  secret: 'keyboard cat'
}));
app.use(flash());

app.use(fileUpload({useTempFiles: true}));




app.get('/',FrontController.login)
app.get('/home',user_auth,FrontController.home)
app.get('/about',user_auth,FrontController.about)
app.get('/contact',user_auth,FrontController.contact)
app.get('/register',FrontController.register)
app.post('/userinfo',FrontController.userinsert)
app.post('/userverify',FrontController.user_verify)
app.get('/course/btech/display',FrontController.headerdisplay)
app.get('/logout',FrontController.logout)

//app.get('/home',user_auth,UserController.home)
app.get('/course/btech',user_auth,CourseController.btech)
app.get('/course/mca',user_auth,CourseController.mca)
app.get('/course/mba',user_auth,CourseController.mba)
app.get('/course/btech/btechview',CourseController.btechview)


app.post('/btechform',user_auth,CourseController.btechinsert)
app.post('/mcaform',user_auth,CourseController.mcainsert)
app.post('/mbaform',user_auth,CourseController.mbainsert)

app.listen(port, () => {
  console.log(`Server is running localhost ${port}`)
})
