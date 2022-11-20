function isAdmin(next) {
    return (req, res) => {
        if (req.user.user.role == 'admin') {
            next(req, res)
        } else return res.status(401).send('unauthorized')
    }
}

module.exports = isAdmin
