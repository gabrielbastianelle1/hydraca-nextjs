let isAdmin = {
    isAdmin: (req, res, next) => {
        if (req.user.user.role == 'admin') {
            next()
        } else return res.status(401).send('unauthorized')
    }
}

module.exports = isAdmin
