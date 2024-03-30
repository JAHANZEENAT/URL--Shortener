const express = require('express')
const router = express.Router()
const { generateShortUrl,redirectToUrl }=require("../controllers/user.js")

router
.route("/")
.post(generateShortUrl)

router
.route("/:shortId")
.get(redirectToUrl)

module.exports=router;