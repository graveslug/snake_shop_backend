const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = newSchema (
    {
        name: {
            type: string,
            required: true
        },
        email: {
            type: string,
            required: true
        },
        password: {
            type: string,
            required: true
        },
        // //figure out how to make it default of false and not be touchable from client side. Most likely be able to change it in database? Not sure as of yet.
        // adminAccess: Boolean,

})

const User = mongoose.model('User', userSchema)
module.exports = User
