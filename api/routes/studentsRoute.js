const express = require('express');
const students = require('../models/studentModel');


const studentRoute = express.Router()


studentRoute.post('/allstudents', async (req,res) => {
        const studentData =   await students.find()
        res.json(studentData)
    
})

studentRoute.post('/deletestudent', async (req,res) => {
       const data = await students.deleteOne(req.body)
       res.json('done')
})

studentRoute.post('/singlestudent', async (req,res) => {

        const data = await students.findOne({studentId:req.body.id })
        res.json(data)
 })

 studentRoute.post('/editstudent', async (req,res) => {
        

        const data = await students.findOneAndUpdate({studentId:req.body.studentId},
                req.body
        )
        res.json('done')
 })

 studentRoute.post('/addstudent', async (req,res) => {

        
        const alreadyUser =await students.findOne({studentId:req.body.studentId})
        if(alreadyUser) {
                res.json('User Id Already Registered')
        }
        if(!alreadyUser) {
              const newUSer = await  students.create(req.body)
              res.json('done')
        }
        
 })



module.exports= studentRoute 