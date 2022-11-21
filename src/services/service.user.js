const User = require('../models/model.User')
const Therapy = require('../models/model.Therapy')
const Food = require('../models/model.Food')

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

    updateProfile: function (params, body, req) {
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
