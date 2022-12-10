const { adminErrorHandler } = require('../errors/errors')
const Bolus = require('../models/model.Bolus')

let bolusService = {
    insertBolus: function (response) {
        return new Promise(async (resolve, reject) => {
            let bolus = new Bolus(response)
            bolus.save((err, result) => {
                if (err) {
                    return reject(adminErrorHandler(err))
                }
                return resolve(result)
            })
        })
    }
}

module.exports = bolusService
