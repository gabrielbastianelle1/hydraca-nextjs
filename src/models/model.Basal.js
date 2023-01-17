const mongoose = require('mongoose')

const Basal = new mongoose.Schema(
    {
        User: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        amountGlucose: {
            type: Number,
            required: [true, 'Necessário colocar glicose']
        },
        amountInsulinTotal: {
            type: Number,
            required: [true, 'Insulina total incorreto']
        },
        state: {
            type: Boolean,
            default: true
        },
        date: {
            type: String,
            required: [true, 'Necessário colocar data']
        },
        time: {
            type: String,
            required: [true, 'Necessário colocar tempo']
        },
        typeInsulin: {
            type: String,
            default: 'Basal'
        }
    },
    {
        versionKey: false,
        collection: 'Basal'
    }
)

module.exports = mongoose.models.Basal || mongoose.model('Basal', Basal)
