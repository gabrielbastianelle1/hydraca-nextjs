const User = require('../models/model.User')
const Therapy = require('../models/model.Therapy')
const Diabete = require('../models/model.Diabetes')
const Food = require('../models/model.Food')

const { adminErrorHandler } = require('../errors/error.auth')

let userService = {
    getAllFoodUser: function () {
        return new Promise(async (resolve, reject) => {
            Food.find({}, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    getAllInfo: function (req) {
        return new Promise(async (resolve, reject) => {
            User.find({ user: req.user }, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    getAllTherapy: function () {
        return new Promise(async (resolve, reject) => {
            Therapy.find({}, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    getAllTherapy: function () {
        return new Promise(async (resolve, reject) => {
            Therapy.find({}, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    updatePerfil: function (params, body, req) {
        return new Promise(async (resolve, reject) => {
            try {
                await User.findOneAndUpdate(
                    { email: params.email },
                    body
                ).exec()
                console.log(params.email)
                return resolve('success')
            } catch (erro) {
                return reject(erro)
            }
        })
    }
}

module.exports = userService
