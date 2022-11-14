const express = require('express')          // Initalizing the express module
const bodyParser = require('body-parser')   // Initalizing the body-parser
const PORT = 3000;
const api = require('./routes/api')          // Initalizing the api.js

// create the instanse express server 
const app = express();

// with that express instanse we use bodyParser
app.use(bodyParser.json())
// with that express instanse we use api.js file
app.use('/api', api);

// dummy api to check the server 
app.get('/', function(req,res){
    res.send("Hello From Server...!")
})

app.listen(PORT, function() {
    console.log("server is running at port number "+ PORT)
})