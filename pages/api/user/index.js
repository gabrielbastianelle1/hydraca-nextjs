const userController = require('../../../src/controllers/controller.user')
const verifyToken = require('../../../src/middlewares/verifyToken')
const isAdmin = require('../../../src/middlewares/isAdmin')

export default verifyToken(userController.getCurrentUser)
