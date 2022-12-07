const User = require('../models/model.User')
const Therapy = require('../models/model.Therapy')
const Food = require('../models/model.Food')
const Diabetes = require('../models/model.Diabetes')

const jwt = require('jsonwebtoken')

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

    getAllDiabetes: function () {
        return new Promise(async (resolve, reject) => {
            Diabetes.find({}, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    updateProfile: function ({ userEmail, valuesToUpdate }) {
        return new Promise(async (resolve, reject) => {
            try {
                let response = await User.findOneAndUpdate(
                    { email: userEmail },

                    valuesToUpdate,
                    { new: true }
                )

                let token = jwt.sign({ user: response }, process.env.SECRET_KEY)

                if (!response) reject('nothing updated')
                return resolve(token)
            } catch (erro) {
                return reject(erro)
            }
        })
    }
}

module.exports = userService
