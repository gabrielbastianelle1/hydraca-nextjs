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
            required: [true, 'aG required']
        },
        amountInsulinTotal: {
            type: Number,
            required: [true, 'aI required']
        },
        state: {
            type: Boolean,
            default: true
        },
        date: {
            type: String,
            required: [true, 'date required']
        },
        time: {
            type: String,
            required: [true, 'time required']
        },
        typeInsulin: {
            type: String,
            default: 'Basal'
        },
        therapy: {
            type: String,
            required: [true, 'therapy required']
        }
    },
    {
        versionKey: false,
        collection: 'Basal'
    }
)

module.exports = mongoose.models.Basal || mongoose.model('Basal', Basal)
