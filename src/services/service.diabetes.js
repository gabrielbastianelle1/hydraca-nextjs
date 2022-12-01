const Diabetes = require('../models/model.Diabetes')

let diabetesService = {
    getAllDiabetes: function () {
        return new Promise((resolve, reject) => {
            Diabetes.find({}, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    insertDiabetes: function (req) {
        return new Promise(async (resolve, reject) => {
            newDiabetes = new Diabetes(req)
            newDiabetes.save((err, result) => {
                if (err) {
                    return reject(adminErrorHandler(err))
                }
                return resolve(result)
            })
        })
    }
}

module.exports = diabetesService
