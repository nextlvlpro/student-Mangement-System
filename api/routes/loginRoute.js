const express = require('express');
const allowedusers = require('../models/loginModel');

const loginRote = express.Router()


loginRote.post('/login', async (req,res) => {
    const {userId, password} = req.body
    
    const user = await allowedusers.findOne({userid:userId })
    if(user) {
        if(password == user.password) {
            res.json('done')
        } else {
            res.json('wrong password')
        }
        
    } else {
        res.json('user does not exists')
    }
    
})


loginRote.post('/userinfo', async (req,res) => {
    const data = await allowedusers.findOne({userid:req.body.user})
    
    if(data) {
        res.json(data.name)
    }
    
})

module.exports= loginRote 