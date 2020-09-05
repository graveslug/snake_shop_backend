require("dotenv").config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001 //<----LOOK HERE ITS DIFFERENT
const mongoose = require("mongoose")

//MongoDB
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

db.on('open', () => {
    console.log("Mongo is hella hooked up")
})

//MIDDLEWARE
app.use(express.json())

//CONTROLLA
const userController = require('./controllers/users.js')
app.use('/users', userController)


//LISTENER
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
