const express = require('express')
const app = express();
const path = require("path")
const {connectMongodb}=require("./connection.js")
const bodyParser = require('body-parser');
const { generateShortUrl,redirectToUrl }=require("./controllers/user.js")
const{ handleSignUp, handleLogin, } = require("./controllers/urlAuth.js")

connectMongodb("mongodb://127.0.0.1:27017/url-shortener")
.then(()=>console.log("Connected to MongoDb"))
.catch((error)=>console.log("Cannot connect to MongoDb",error))

const urlRouter = require("./routes/user.js")
const staticRoute = require("./routes/staticRouter.js")
const urlAuth = require("./routes/urlAuth.js")

app.use("/",staticRoute)
app.use("/url",urlRouter)
app.use("/auth",urlAuth)

app.use(express.json())
app.use(express.urlencoded({extended : false }))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api', generateShortUrl);
app.post('/signup', handleSignUp);
app.post('/login', handleLogin);

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

const PORT = 8001;
app.listen(PORT,()=>{
    console.log(`Listening to port no. ${PORT}`);
})