function authErrorHandler(error) {
    if (error.code == 11000) {
        return 'O email já está a ser usado'
    } else {
        for (let index in error.errors) {
            return error.errors[index].message
        }
    }
}

function adminErrorHandler(error) {
    if (error.code == 11000) {
        return 'name already used'
    } else {
        for (let index in error.errors) {
            return error.errors[index].message
        }
    }
}

module.exports = {
    authErrorHandler,
    adminErrorHandler
}
