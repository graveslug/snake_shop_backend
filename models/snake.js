const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Sex = ["Male", "Female", "Unknown"]

//Snake Schema
const SnakeSchema = new Schema({
        image: { type: String, required: true},
        species: { type: String, required: true},
        venomous: { type: Boolean, required: true},
        morph: { type: String, required: true},
        sex: { type: String, values: Sex, required: true},
        age: { type: String, required: true},
        prooven: { type: Boolean, required: true},
        origin: { type: String, required: true},
        quote: { type: String, required: true},
        description: { type: String, required: true}
    })

const SnakeInfo = mongoose.model('SnakeInfo', SnakeSchema)

module.exports = SnakeInfo