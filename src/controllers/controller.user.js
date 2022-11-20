const userService = require('../services/service.user')
const { calcTotalInsulin } = require('../calc/calcInsulin')

let userController = {
    getCurrentUser: function (req, res) {
        res.status(200).json(req.user)
    },

    getAllFoodUser: async function (req, res) {
        try {
            return res.status(200).json(await userService.getAllFoodUser())
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    getAllInfo: async function (req, res) {
        try {
            return res.status(200).json(await userService.getAllInfo(req.user))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    getAllTherapy: async function (req, res) {
        try {
            return res.status(200).json(await userService.getAllTherapy())
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    insertRegister: async function (req, res) {
        console.log(req.user.user)

        const { amountHc, carbRatio, amountGlucose, correctionFactor } =
            req.body

        calcTotalInsulin(amountHc, carbRatio, amountGlucose, correctionFactor)

        response = Object.assign(req.body, {
            User: req.user.user._id
        })
    },

    updatePerfil: async function (req, res) {
        try {
            return res
                .status(200)
                .json(
                    await userService.updatePerfil(req.body, req.params.email)
                )
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = userController
