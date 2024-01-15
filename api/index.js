const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const cookieParser = require('cookie-parser')
PORT = 4000

const cors = require('cors')
const loginRote = require('./routes/loginRoute')
const studentRoute = require('./routes/studentsRoute')
app.use(cookieParser())
app.use(express.json())


app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

mongoose.connect(process.env.MONGOURL).then((res)=>console.log('mongo connected'))

app.use('/user/', loginRote)
app.use('/students/',studentRoute)


app.listen(PORT, ()=> console.log('Connected at '+ PORT))