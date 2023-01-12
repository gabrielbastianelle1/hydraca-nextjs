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
    },

    getFoodName: function (req, res, params) {
        return new Promise(async (resolve, reject) => {
            let response = await Food.findByName({ name: req }).exec()
            if (response == null) {
                return reject('insucess')
            }
            console.log(response)
            return resolve(response)
        })
    }
}

module.exports = foodService
