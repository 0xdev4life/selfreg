const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classSchema = new Schema({
    ClassId: {
        type: String,
        required: true,
        unique: true
    },
    Number: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    ParentId: {
        type: String,
        required: true
    },
    MainclassId: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('classes',classSchema)
