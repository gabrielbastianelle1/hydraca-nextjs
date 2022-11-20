/**
 * ERROS
 */

function auth_error_handler(error) {
    if (error.code == 11000) {
        return 'email already used'
    } else {
        for (index in error.errors) {
            return error.errors[index].message
        }
    }
}

function admin_error_handler(error) {
    if (error.code == 11000) {
        return 'name already used'
    } else {
        for (index in error.errors) {
            return error.errors[index].message
        }
    }
}

module.exports = {
    auth_error_handler,
    admin_error_handler
}
