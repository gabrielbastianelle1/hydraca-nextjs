const jwt = require('jsonwebtoken')

let verifyToken = {
    verifyToken: (req, res, next) => {
        let token = req.headers['x-access-token']

        if (!token) {
            return res.status(403).send('no token provided')
        }

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(401).send('unauthorized')
            }
            req.user = user
        })
        next()
    }
}

module.exports = verifyToken
