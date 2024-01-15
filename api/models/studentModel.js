const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    studentId:Number,
    studentName:String,
    StudentNumber:Number,
    StudentAge:Number,
    StudentAddress:String
})

const students = mongoose.model('students', StudentSchema)
module.exports = students
