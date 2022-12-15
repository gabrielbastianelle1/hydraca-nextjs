const Food = require('../models/model.Food')

let foodService = {
    getAllFood: function () {
        return new Promise(async (resolve, reject) => {
            Food.find({}, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }
}

module.exports = foodService
