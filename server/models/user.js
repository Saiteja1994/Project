const mongoose = require('mongoose');   // Initalizing the express module
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('user', userSchema,'users')