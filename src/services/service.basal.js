const { adminErrorHandler } = require('../errors/errors')
const Basal = require('../models/model.Basal')

let basalService = {
    insertBasal: function (response) {
        return new Promise(async (resolve, reject) => {
            let basal = new Basal(response)
            basal.save((err, result) => {
                if (err) {
                    return reject(adminErrorHandler(err))
                }
                return resolve(result)
            })
        })
    },

    getAllBasal: function ({ _id }) {
        return new Promise((resolve, reject) => {
            Basal.find({ User: _id }, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }
}

module.exports = basalService
