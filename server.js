require("dotenv").config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const morgan = require('morgan')


const PORT = process.env.PORT || 3001 //<----LOOK HERE ITS DIFFERENT FROM FRONTEND

//MongoDB
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//checks error && success
db.on('error', (error) => console.log(error.message + 'Yo mongod isn\'t connected!'))
db.on('connected', ()=> console.log('Yaaaaas mongod has connected'))
db.on('disconnected', ()=> console.log('Your mongod has been disconnected. Peace out girl-scout'))

//opens connection to mongod
db.on('open', ()=>{})

//MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))

//CONTROLLAAAAAAA
//calls snake in controller
const snakeController = require('./controllers/snakes')
//sets up snake as the snakeController
app.use('/snakes', snakeController)



//LISTENER
app.listen(PORT, () => {
    console.log(`The port that's open is: ${PORT}`)
})
