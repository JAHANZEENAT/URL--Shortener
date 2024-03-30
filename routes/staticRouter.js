const express = require('express')
const router = express.Router()

router.get("/",(req,res) => {
    return res.render("url")
})

router.get("/signup",(req,res) => {
    return res.render("urlAuthSignup")
})

router.get("/login",(req,res)=>{
    return res.render("login")
})
module.exports=router;