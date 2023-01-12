const userService = require('../services/service.user')
const bolusService = require('../services/service.bolus')
const basalService = require('../services/service.basal')
const { calcTotalInsulin } = require('../calc/calcInsulin')
const foodService = require('../services/service.food')
const bcrypt = require('bcryptjs')

function addBolusToRegisters({ registers, bolus }) {
    bolus.forEach((element) => {
        registers.push(element)
    })
    return registers
}

let userController = {
    getCurrentUser: function (req, res) {
        res.status(200).json(req.user)
    },

    getAllFood: async function (req, res) {
        try {
            return res.status(200).json(await foodService.getAllFood())
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    getFoodName: async function (req, res) {
        try {
            return res.status(200).json(await foodService(req.params.name))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    insertBasal: async function (req, res) {
        let user = req.user.user

        let response = Object.assign(req.body, {
            User: user._id
        })

        try {
            return res
                .status(200)
                .json(await basalService.insertBasal(response))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    insertBolus: async function (req, res) {
        let user = req.user.user
        const { carbRatio, sensitivity } = user

        const { amountHc, amountGlucose } = req.body

        let { amountInsulinTotal, amountInsulinHc, amountInsulinCorrection } =
            calcTotalInsulin(amountHc, carbRatio, amountGlucose, sensitivity)

        let response = Object.assign(
            req.body,
            {
                User: user._id
            },
            {
                amountInsulinTotal: amountInsulinTotal,
                amountInsulinHc: amountInsulinHc,
                amountInsulinCorrection: amountInsulinCorrection
            }
        )

        try {
            return res
                .status(200)
                .json(await bolusService.insertBolus(response))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    deleteUser: async function (req, res) {
        let userEmail = req.user.user.email
        try {
            return res
                .status(200)
                .json(await userService.deleteUser({ userEmail }))
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    updateProfile: async function (req, res) {
        let userEmail = req.user.user.email
        let valuesToUpdate = req.body
        let { password } = valuesToUpdate

        if (password) {
            valuesToUpdate.password = bcrypt.hashSync(
                password,
                bcrypt.genSaltSync(10)
            )
        }
        try {
            return res.status(200).json(
                await userService.updateProfile({
                    userEmail,
                    valuesToUpdate
                })
            )
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    getAllRegisters: async function (req, res) {
        let user = req.user.user
        const { _id } = user

        let registers

        try {
            registers = await basalService.getAllBasal({ _id })
            let bolus = await bolusService.getAllBolus({ _id })

            registers = addBolusToRegisters({ registers, bolus })
            return res.status(200).json(registers)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

module.exports = userController
