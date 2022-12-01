const adminController = require('../../../src/controllers/controller.admin')
const verifyToken = require('../../../src/middlewares/verifyToken')
const isAdmin = require('../../../src/middlewares/isAdmin')

export default verifyToken(isAdmin(adminController.getAllUsers))
