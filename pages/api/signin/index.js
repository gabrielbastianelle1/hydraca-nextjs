const authController = require('../../../src/controllers/controller.auth')
export default authController.signin

/**
 * @swagger
 * paths:
 *  /api/signin:
 *      post:
 *          tags:
 *              - auth
 *          sumarry: Access to website
 *          description: Example of login Admin and User
 *          operationId: addUser
 *          requestBody:
 *              description: Login
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      examples:
 *                          user:
 *                              value:
 *                                  email: 'user@example.com'
 *                                  password: 'user'
 *                          admin:
 *                              value:
 *                                  email: 'user@example.com'
 *                                  password: 'user'
 *
 *          responses:
 *              '200':
 *                  description: succesful operation
 *              '400':
 *                  description: invalid input
 *
 *
 */
