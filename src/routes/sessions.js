const cookieParser = require("cookie-parser")
const express = require("express")
const session =require("express-session")
const fileStrategy = require("session-file-store")

const router = express.Router()

const fileStorage = fileStrategy(session)

router.use(cookieParser())
router.use(session({
    store:new fileStorage({path:"./sessions",ttl:60,retries:0}),
    secret:"ljdas456asf145",
    saveUninitialized:false,
    resave:false
}))

router.get(("/"),(req,res)=>{
    res.render("logInForm")
})

router.post(("/"),(req,res)=>{
    let logIn=req.body
    console.log(logIn)
    router.get("/",(req,res)=>{
        req.session.user={
            email:req.body.email,
            name:req.body.name
        }

    })
})

module.exports=router

