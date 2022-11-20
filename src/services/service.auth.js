const User = require('../models/model.User')
const jwt = require('jsonwebtoken')
const { auth_error_handler } = require('../errors/error.auth')

let authService = {
    signup: function (req) {
        return new Promise(async (resolve, reject) => {
            new_user = new User(req) //novo usuario
            await new_user.encrypt_password() //encriptar a password
            new_user.save((err, result) => {
                if (err) {
                    return reject(auth_error_handler(err))
                }
                return resolve(result)
            })
        })
    },

    signin: function (req) {
        return new Promise(async (resolve, reject) => {
            User.find({ email: req.email }, async (err, result) => {
                if (err) reject(err)

                if (result.length == 0) {
                    return reject('email do not registed')
                }

                if (!(await new User().compare_password(req, result[0]))) {
                    reject('wrong password')
                }

                let token = jwt.sign(
                    { user: result[0] },
                    process.env.SECRET_KEY
                )
                return resolve(token)
            })
        })
    }
}

module.exports = authService
