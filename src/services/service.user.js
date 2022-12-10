const User = require('../models/model.User')
const jwt = require('jsonwebtoken')

let userService = {
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
