const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: String,
        required: true
    },
    regNumber: {
        type: Number,
        required: true
    },
    appNumber: {
        type: Number,
        required: true
    },
    classes: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('trademarks-temp',userSchema)
