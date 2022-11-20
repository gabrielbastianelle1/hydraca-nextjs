const User = require('../models/model.User')

function insertInitialData() {
    User.find({})
        .then((response) => {
            if (response.length == 0) {
                //so vai funcionar se for rodado pela primeira vez
                let admin = new User({
                    role: 'admin',
                    name: 'admin',
                    birthday: '1997-01-14',
                    email: 'admin@example.com',
                    password: 'admin'
                })

                admin.encrypt_password()
                admin.save()
            }
        })
        .catch((error) => console.log(error))
}

module.exports = {
    insertInitialData
}
