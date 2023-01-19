const userController = require('../../../src/controllers/controller.user')
const verifyToken = require('../../../src/middlewares/verifyToken')
/**
 * @swagger
 * paths:
 *  /api/index:
 *     get:
 *          tags:
 *              - user
 *          sumarry: profile users
 *          description: profile users
 *          operationId: index
 *          responses:
 *              '200':
 *                  description: succesful operation
 *                  content:
 *                      application/json:
 *                          examples:
 *                              Profile:
 *                                  value:
 *                                     _id: '639c8f85b78834dfde9f4831'
 *                                     role: 'user'
 *                                     name: 'Barbara'
 *                                     birthday: '2002-07-10'
 *                                     email: 'barbara@gmail.com'
 *                                     password: '$2a$10$gGpkJtPRkN01t1gQK5XXKeet7WMe9KzIf2/RYAgErbPXrJ89wdyF2'
 *                                     iat: '1671204748'
 *              '500':
 *                  description: server error
 *
 */
export default verifyToken(userController.getCurrentUser)
