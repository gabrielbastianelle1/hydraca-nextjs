const userService = require('../services/service.user')
const bolusService = require('../services/service.bolus')
const basalService = require('../services/service.basal')
const { calcTotalInsulin } = require('../calc/calcInsulin')
const bcrypt = require('bcryptjs')

async function hashPassword(password, valuesToUpdate) {
    valuesToUpdate.password = await bcrypt.hashSync(
        password,
        bcrypt.genSaltSync(10)
    )

    return valuesToUpdate
}

let userController = {
    getCurrentUser: function (req, res) {
        res.status(200).json(req.user)
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

        let response = Object.assign(
            req.body,
            {
                User: user._id
            },
            {
                amountInsulinTotal: calcTotalInsulin(
                    amountHc,
                    carbRatio,
                    amountGlucose,
                    sensitivity
                )
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

    updateProfile: async function (req, res) {
        let userEmail = req.user.user.email
        let valuesToUpdate = req.body
        let { password } = valuesToUpdate

        if (password) {
            valuesToUpdate = hashPassword(password, valuesToUpdate)
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
    }
}

module.exports = userController
