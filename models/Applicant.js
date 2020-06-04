const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const applicantSchema = new Schema({
//     title: {
//         type: String,
//         // required: true,
//     },
//     type: {
//         type: String,
//         // required: true
//     },
//     name: {
//         type: String,
//         // required: true
//     },
//     inn: {
//         type: String,
//         // required: true
//     },
//     kpp: {
//         type: String,
//         // required: true
//     },
//     ogrn: {
//         type: String,
//         default: ''
//     },
//     address: {
//         type: String,
//         // required: true
//     }
//     ,
//     head: {
//         type: String,
//         // required: true
//     },
//
//     user: {
//         // ref: 'users',
//         type: String
//     }
// })

const personSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    inn: {
        type: String,
        required: true
    },
    kpp: {
        type: String,
        required: true
    },
    ogrn: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        required: true
    }
    ,
    head: {
        type: String,
        // required: true
    },
    display: {
        type: Boolean,
        default: false
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('applicants',personSchema)
