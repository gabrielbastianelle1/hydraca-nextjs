const userController = require('../../../src/controllers/controller.user')
const verifyToken = require('../../../src/middlewares/verifyToken')

export default verifyToken(userController.getAllFood)
