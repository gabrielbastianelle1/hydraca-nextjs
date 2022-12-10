const userService = require('../services/service.user')
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

    getAllFoodUser: async function (req, res) {
        try {
            return res.status(200).json(await userService.getAllFoodUser())
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    getAllDiabetes: async function (req, res) {
        try {
            return res.status(200).json(await userService.getAllDiabetes())
        } catch (error) {
            return res.status(400).json(error)
        }
    },

    /**
 *
 escala -->   glucoseTrend
 data --> date
 hora --> time
 dose --> amountInsulin (dose de insulina )
 typeInsulin  --> tipo de insulina
 */
    insertBasal: async function (req, res) {
        const { glucoseTrend, date, time, amountInsulin, typeInsulin } =
            req.body

        let response = Object.assign(req.body, {
            User: req.user.user._id
        })

        try {
            return res.status(200).json(await userService.insertBasal(response))
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

        try {
            return res
                .status(200)
                .json(await userService.insertRegister(response))
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
