const adminController = require('../../../src/controllers/controller.admin')
const verifyToken = require('../../../src/middlewares/verifyToken')
const isAdmin = require('../../../src/middlewares/isAdmin')
/**
 * @swagger
 * paths:
 *      /api/admin/getallusers:
 *     get:
 *      tags:
 *          - admin
 *                  description: verify token and return all data from user recurrent that token,
 *               responses:
 *                   '200':
 *                      description: json with user data
 */
export default verifyToken(isAdmin(adminController.getAllUsers))
