const adminController = require('../../../src/controllers/controller.admin')
/**
 * @swagger
 * paths:
 *      /api/admin/userremove:
 *     get:
 *      tags:
 *          - admin
 *                  description: verify token and return all data from user recurrent that token,
 *               responses:
 *                   '200':
 *                      description: json with user data
 */

export default adminController.getAllUsersRemove
