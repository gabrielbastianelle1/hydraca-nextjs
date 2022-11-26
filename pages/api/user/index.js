const userController = require('../../../src/controllers/controller.user')
const verifyToken = require('../../../src/middlewares/verifyToken')

/**
 * @swagger
 * /api/user:
 *   get:
 *     description: verify token and return all data from user recurrent that token,
 *     responses:
 *       200:
 *         description: json with user data
 */

export default verifyToken(userController.getCurrentUser)
