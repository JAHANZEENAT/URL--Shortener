const mongoose = require('mongoose')
const authSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required: true,
    },
})
const loginSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : false,
    },
    password : {
        type : String,
        required: true,
    },
},{timestamps : true })
const authModel = mongoose.model("authentications",authSchema);
const loginModel = mongoose.model("login",loginSchema);
module.exports = {authModel,loginModel};