const mongoose = require('mongoose')
const Schema = mongoose.Schema

const applicationSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    logoUrl: {
        type: String,
        default: ''
    },
    logoDescr: {
        type: String,
        default: ''
    },
    colors: {
        type: String,
        default: ''
    },
    unsecure: {
        type: String,
        default: ''
    },
    classes: [
        {
            classId: {
                ref: 'classes',
                type: Schema.Types.ObjectId
            }
        }
    ],
    applicant: {
        ref: 'applicants',
        type: Schema.Types.ObjectId
    },
    mode: {
        type: String,
        required: true
    },
    options: [
        {
            option: {
                type: String
            },
            price: {
                type: Number
            }
        }
    ],
    price: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    documents: [
        {
            type: {
                type: String
            },
            url: {
                type: String
            }
        }
    ],
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('applications',applicationSchema)
