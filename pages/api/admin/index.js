const adminController = require('../../../src/controllers/controller.admin')
const verifyToken = require('../../../src/middlewares/verifyToken')

export default verifyToken(adminController.getAllUsers)
