const shortid = require("shortid");
const urlModel = require("../models/user.js")

async function generateShortUrl(req,res){

    const shortId= shortid(8);
    const body = req.body;
   
     if(!body.url) return res.status(400).json({error  : "URL Required !!"})

    const result = await urlModel.create({
        shortId : shortId,
        redirectUrl :body.url,
         visitedHistory:[],
     });
     //return res.json({id : shortId});
    return res.render("url",{
        id : shortId,
    });
}

async function redirectToUrl (req,res){
    const short = req.params.shortId;
    const urlObject = await urlModel.findOne({shortId : short});
    res.redirect(urlObject.redirectUrl);
}
module.exports={
    generateShortUrl,redirectToUrl,
}