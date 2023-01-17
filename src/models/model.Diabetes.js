const mongoose = require('mongoose')

const Diabetes = new mongoose.Schema(
    {
        type: {
            type: String,
            required: [true, 'Tipo de diabete obrigatório']
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
