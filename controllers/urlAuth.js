const {authModel,loginModel} = require('../models/urlAuth.js');

async function handleSignUp (req,res){
    const {name,email,password}=req.body;
    await authModel.create({
        name : name,
        email : email,
        password : password,
    })
    return res.render("login");
}
async function handleLogin(req,res){
    const {email,password}=req.body;
    const emailMatch = await authModel.findOne({email : email});
    const passwordMatch = await authModel.findOne({password:password});
    if((!emailMatch) || (!passwordMatch)) 
    res.render("login",{msg : "wrong email id or password"});
    await loginModel.create({
        email : email,
        password : password,
    })
    return res.render("url");
}
module.exports = {
 handleSignUp,handleLogin,
}
