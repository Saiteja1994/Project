const express = require('express')          // Initalizing the express module

// with that express instanse we use Router
const router = express.Router()
const User = require('../models/user')          // Initalizing the User.js
const mongoose= require('mongoose')          // Initalizing the mongoose 
// db connection
const db ="mongodb+srv://admin:admin@cluster0.sguwp.mongodb.net/ECOMMERCE?retryWrites=true&w=majority"
           
router.get('/',(req, res) =>  {
    res.send("From API");
})
mongoose.connect(db, err=>{
    if(err)  console.log("Error :"+err);
    else console.log("connection Established Successfully");
})

router.post('/register',(req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error,registeredUser) => {
        if(error) console.log("Error :"+error);
        else res.status(200).send(registeredUser);
    })
})

router.post('/login',(req, res) => {
    let userData = req.body
    User.findOne({ username : userData.username }, (err,user) => {
        if(err) console.log("Error : "+err)
        else {
            if(!user) res.status(401).send("Invalid username")
            else if(user.password !== userData.password) res.status(401).send("Invalid password")
            else res.status(200).send(user)
        } 
    })
})

module.exports = router
