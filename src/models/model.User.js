const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { isEmail } = require('validator')

const User = new mongoose.Schema(
    {
        role: {
            type: String,
            default: 'user'
        },
        name: {
            type: String,
            required: [true, 'name required']
        },
        birthday: {
            type: Date,
            required: [true, 'birthday required']
        },
        email: {
            type: String,
            required: [true, 'email required'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'please enter valid email']
        },
        password: {
            type: String,
            required: [true, 'password required']
        },
        state: {
            type: Boolean,
            default: true
        },
        height: {
            type: Number
        },
        weight: {
            type: Number
        },
        imc: {
            type: Number
        },
        idDiabetes: {
            type: mongoose.Types.ObjectId,
            ref: 'Diabetes'
        },
        idTherapy: {
            type: mongoose.Types.ObjectId,
            ref: 'Therapy'
        },
        sensitivity: {
            type: Number
        },
        glucoserange: {
            type: Array,
            default: [80, 120]
        }
    },

    {
        versionKey: false,
        collection: 'User'
    }
)

User.methods.encryptPassword = async function () {
    this.password = await bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
}

User.methods.comparePassword = async function (req, user) {
    return await bcrypt.compareSync(req.password, user.password)
}

module.exports = mongoose.models.User || mongoose.model('User', User)
