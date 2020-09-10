const mongoose = require('mongoose')


const userSchema = new mongoose.Schema (
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
        // //figure out how to make it default of false and not be touchable from client side. Most likely be able to change it in database? Not sure as of yet.
        // adminAccess: Boolean,

})

const User = mongoose.model('User', userSchema)
module.exports = User
