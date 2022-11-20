const mongoose = require('mongoose')

const Diabetes = new mongoose.Schema(
    {
        type: {
            type: String,
            required: [true, 'type required']
        },
        state: {
            type: Boolean,
            default: true
        }
    },
    {
        versionKey: false,
        collection: 'Diabetes'
    }
)

module.exports =
    mongoose.models.Diabetes || mongoose.model('Diabetes', Diabetes)
