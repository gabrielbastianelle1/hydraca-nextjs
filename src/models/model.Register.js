const mongoose = require('mongoose')

const Register = new mongoose.Schema(
    {
        User: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        degreeExercise: {
            type: String
        },
        timeExercise: {
            type: Number
        },
        amountGlucose: {
            type: Number
        },
        amountInsulin: {
            type: Number
        },
        glucoseTrend: {
            type: String
        },
        nameMeal: {
            type: String
        },
        state: {
            type: Boolean,
            default: true
        },
        date: {
            type: Date
        },
        time: {
            type: String
        },
        amountHc: {
            type: Number
        },
        typeInsulin: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: 'Register'
    }
)

module.exports = mongoose.model('Register', Register)
