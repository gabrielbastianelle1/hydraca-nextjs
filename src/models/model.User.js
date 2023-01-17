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
            required: [true, '  O campo nome não pode estar vazio']
        },
        birthday: {
            type: String,
            required: [true, 'Inisira a data de nascimento']
        },
        email: {
            type: String,
            required: [true, 'Insira o campo email corretamente'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Insira um email válido']
        },
        password: {
            type: String,
            required: [true, 'Insira a senha']
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
        therapy: {
            type: String,
            ref: 'Therapy'
        },
        sensitivity: {
            type: Number
        },
        carbRatio: {
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
