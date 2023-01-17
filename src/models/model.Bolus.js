const mongoose = require('mongoose')

const Bolus = new mongoose.Schema(
    {
        User: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: false
        },
        degreeExercise: {
            type: String
        },
        timeExercise: {
            type: Number
        },
        amountGlucose: {
            type: Number,
            required: [true, 'Glicose incorreto']
        },
        amountInsulinHc: {
            type: Number
        },
        amountInsulinCorrection: {
            type: Number
        },
        amountInsulinTotal: {
            type: Number
        },
        nameMeal: {
            type: String
        },
        state: {
            type: Boolean,
            default: true
        },
        date: {
            type: String,
            required: [true, 'Necessario colocar data']
        },
        time: {
            type: String,
            required: [true, 'Necessário colocar hora']
        },
        amountHc: {
            type: Number,
            required: [false, 'hc required']
        },
        typeInsulin: {
            type: String,
            default: 'Bolus'
        }
    },
    {
        versionKey: false,
        collection: 'Bolus'
    }
)

module.exports = mongoose.models.Bolus || mongoose.model('Bolus', Bolus)
