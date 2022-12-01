const authController = require('../../../src/controllers/controller.auth')
export default authController.signup

/**
 * @swagger
 * paths:
 *  /api/signup:
 *      post:
 *          tags:
 *              - auth
 *          sumarry: add new user to database
 *          description: add new user to database
 *          operationId: addUser
 *          requestBody:
 *              description: create new user
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *                      examples:
 *                          user:
 *                              value:
 *                                  name: 'user'
 *                                  email: 'user@example.com'
 *                                  password: 'user'
 *                                  birthday: '2000-01-01'
 *          responses:
 *              '200':
 *                  description: succesful operation
 *              '400':
 *                  description: invalid input
 *
 *
 */
