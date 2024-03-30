const express = require ('express')
const router = express.Router()
const {handleSignUp, handleLogin,
} = require("../controllers/urlAuth.js")
router.post("/signup",handleSignUp).post("/login",handleLogin)
module.exports=router;