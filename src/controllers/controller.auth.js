const authService = require('../services/service.auth')

let authController = {
    signup: async function (req, res) {
        try {
            return res.status(200).json(await authService.signup(req.body))
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    signin: async function (req, res) {
        try {
            return res.status(200).json(await authService.signin(req.body))
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = authController
