const mongoose = require('mongoose')

const Therapy = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name required'],
            unique: [true, 'name already used']
        },
        description: {
            type: String,
            required: [true, 'description required']
        },

        state: {
            type: Boolean,
            default: true
        }
    },

    {
        versionKey: false,
        collection: 'Therapy'
    }
)

module.exports = mongoose.model('Therapy', Therapy)
