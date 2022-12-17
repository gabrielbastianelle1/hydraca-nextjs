const mongoose = require('mongoose')

const Food = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'name required'],
            unique: [true, 'name already used']
        },

        qtd: {
            type: String,
            required: [true, 'name required']
        },
        Hc: {
            type: String,
            required: [true, 'Hc required']
        },

        state: {
            type: Boolean,
            default: true
        }
    },
    {
        versionKey: false,
        collection: 'Food'
    }
)

module.exports = mongoose.models.Food || mongoose.model('Food', Food)
