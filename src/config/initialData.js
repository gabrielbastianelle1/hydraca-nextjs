const User = require('../models/model.User')
const Diabetes = require('../models/model.Diabetes')
const Food = require('../models/model.Food')

function insertInitialData() {
    User.find({})
        .then((response) => {
            let totalUsersInserted = response.length

            if (totalUsersInserted == 0) {
                console.log('oaisdoikasmko')
                let admin = new User({
                    role: 'admin',
                    name: 'admin',
                    birthday: '1997-01-14',
                    email: 'admin@example.com',
                    password: 'admin'
                })

                admin.encryptPassword()
                admin.save()
            }
        })
        .catch((error) => console.log(error))

    Diabetes.find({})
        .then((response) => {
            if (response.length == 0) {
                let diabetes = new Diabetes({
                    type: 'Diabete tipo 1'
                })
                diabetes.save()
                diabetes = new Diabetes({
                    type: 'Diabete tipo 2'
                })
                diabetes.save()
            }
        })
        .catch((error) => console.log(error))

    Food.find({}).then((response) => {
        if (response.length == 0) {
            let food = new Food({
                name: 'Couve-flor',
                qtd: '1 Xícara – 100g',
                Hc: '4,5'
            })
            food.save()
            food = new Food({
                name: 'Arroz branco',
                qtd: '1 Xícara – 100g',
                Hc: '28'
            })
            food.save()
        }
    })
}

module.exports = {
    insertInitialData
}
