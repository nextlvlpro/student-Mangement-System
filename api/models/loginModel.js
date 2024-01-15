const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    userId:String,
    password:String
})

const allowedusers = mongoose.model('allowedusers', UserSchema)
module.exports = allowedusers
