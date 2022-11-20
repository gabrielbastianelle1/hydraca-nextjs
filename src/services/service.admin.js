const User = require('../models/model.User')
const Therapy = require('../models/model.Therapy')
const Diabete = require('../models/model.Diabetes')
const Food = require('../models/model.Food')
const { adminErrorHandler } = require('../errors/errors')

let adminService = {
    getAllUsers: function () {
        return new Promise((resolve, reject) => {
            User.find({ state: 'true' }, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    getAllUsersRemove: function () {
        return new Promise((resolve, reject) => {
            User.find({ state: 'false' }, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    getUsersEmail: function (req, res, params) {
        return new Promise(async (resolve, reject) => {
            let response = await User.findOne({ email: req }).exec()
            if (response == null) {
                return reject('insucess')
            }
            console.log(response)
            return resolve(response)
        })
    },

    getAllTherapies: function () {
        return new Promise(async (resolve, reject) => {
            Therapy.find({}, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    getAllFood: function () {
        return new Promise(async (resolve, reject) => {
            Food.find({}, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    getFoodId: function (req, res, params) {
        return new Promise(async (resolve, reject) => {
            let response = await Food.findById({ _id: req }).exec()
            if (response == null) {
                return reject('insucess')
            }
            console.log(response)
            return resolve(response)
        })
    },

    getAllDiabete: function () {
        return new Promise((resolve, reject) => {
            Diabete.find({}, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    getDiabeteId: function (req, res, params) {
        return new Promise(async (resolve, reject) => {
            let response = await Diabete.findById({ _id: req }).exec()
            if (response == null) {
                return reject('insucess')
            }
            console.log(response)
            return resolve(response)
        })
    },

    insertTherapy: function (req) {
        return new Promise(async (resolve, reject) => {
            new_therapy = new Therapy(req) //nova terapia
            new_therapy.save((err, result) => {
                if (err) {
                    return reject(adminErrorHandler(err))
                }
                return resolve(result)
            })
        })
    },

    insertFood: function (req) {
        return new Promise(async (resolve, reject) => {
            new_food = new Food(req)
            new_food.save((err, result) => {
                if (err) {
                    return reject(adminErrorHandler(err))
                }
                return resolve(result)
            })
        })
    },

    insertDiabete: function (req) {
        return new Promise(async (resolve, reject) => {
            new_diabete = new Diabete(req)
            new_diabete.save((err, result) => {
                if (err) {
                    return reject(adminErrorHandler(err))
                }
                return resolve(result)
            })
        })
    },

    deleteTherapy: function (req) {
        return new Promise(async (resolve, reject) => {
            //let response = await Therapy.findByIdAndUpdate({_id: req //FIND ID
            let response = await Therapy.findOneAndUpdate(
                { name: req },
                { state: false }
            ).exec()
            if (response == null) {
                return reject('not edited')
            }
            console.log(response)
            return resolve('success')
        })
    },

    deleteUser: function (req) {
        return new Promise(async (resolve, reject) => {
            let response = await User.findOneAndUpdate(
                { email: req },
                { state: false }
            ).exec()
            if (response == null) {
                return reject('not edited')
            }
            console.log(response)
            return resolve('success')
        })
    },

    deleteFood: function (req) {
        return new Promise(async (resolve, reject) => {
            let response = await Food.findOneAndUpdate(
                { name: req },
                { state: false }
            ).exec()
            if (response == null) {
                return reject('not edited')
            }
            console.log(response)
            return resolve('success')
        })
    },

    deleteDiabete: function (req) {
        return new Promise(async (resolve, reject) => {
            let response = await Food.findOneAndUpdate(
                { type: req },
                { state: false }
            ).exec()
            if (response == null) {
                return reject('not edited')
            }
            console.log(response)
            return resolve('success')
        })
    },

    deleteDiabete: function (req) {
        return new Promise(async (resolve, reject) => {
            let response = await Diabete.findOneAndUpdate(
                { type: req },
                { state: false }
            ).exec()
            if (response == null) {
                return reject('not edited')
            }
            console.log(response)
            return resolve('success')
        })
    },

    updateTherapy: function (body, params) {
        return new Promise(async (resolve, reject) => {
            try {
                await Therapy.findOneAndUpdate(
                    { name: params.name },
                    body
                ).exec()
                return resolve('success')
            } catch (erro) {
                return reject(adminErrorHandler(erro))
            }
        })
    },

    updateFood: function (body, params) {
        return new Promise(async (resolve, reject) => {
            try {
                await Food.findOneAndUpdate({ name: params.name }, body).exec()
                return resolve('success')
            } catch (erro) {
                return reject(adminErrorHandler(erro))
            }
        })
    },

    updateDiabete: function (body, params) {
        return new Promise(async (resolve, reject) => {
            try {
                await Diabete.findOneAndUpdate(
                    { type: params.type },
                    body
                ).exec()
                return resolve('success')
            } catch (erro) {
                return reject(adminErrorHandler(erro))
            }
        })
    },

    updateUser: function (body, params) {
        return new Promise(async (resolve, reject) => {
            try {
                await User.findOneAndUpdate(
                    { email: params.email },
                    body
                ).exec()
                return resolve('success')
            } catch (erro) {
                return reject(adminErrorHandler(erro))
            }
        })
    }
}

module.exports = adminService
