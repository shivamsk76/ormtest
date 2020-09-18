const express = require('express')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const autheticate = require('./model/authenticate')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const middleware = require('./middleware/middleware')

 

var app = express()
app.use(bodyParser.json())
app.use(cors({origin:"http://localhost:3000"}))





app.post('/signup', async function(req, res){

   
    var password = await bcrypt.hash(req.body.password, 10)
    console.log(password.length);
    var username = req.body.username
    await autheticate.create({
        username,
        password
    }).then(result => console.log(result))
    res.status(200).send()
})
app.post("/login", async function(req, res){
    var user = await autheticate.findOne({where: {username : req.body.username}})
    if(user==null)
    {
        res.status(400).send('can not find user')
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)) 
        {
            var token= jwt.sign({
                username:req.body.username
            },'secret',
            {expiresIn: "120"})
            res.status(200).send({
                "token":token
            })


            res.send('Success')
        } else{
            res.send('not allowed')
        }
    }
    catch{
        res.status(500).send('got some error')
    }
})
app.post("/checkproduct",middleware,(req,res)=>{
    console.log("hello this is product");
    res.send("this is product window")
})
app.post("/saveproduct",middleware,(req, res)=> {
    console.log("save product");
    if (req.user) {
                     res.send("this is save product window")         
    }else{
        res.send("unauthorize access")
    }
}) 

app.listen(9000, ()=> console.log("server is running"))