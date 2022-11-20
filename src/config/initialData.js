const User = require('../models/model.User')

function insertInitialData() {
    User.find({})
        .then((response) => {
            let totalUsersInserted = response.length

            if (totalUsersInserted == 0) {
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
}

module.exports = {
    insertInitialData
}
