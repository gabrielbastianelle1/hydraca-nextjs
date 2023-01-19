const userController = require('../../../src/controllers/controller.user')
const verifyToken = require('../../../src/middlewares/verifyToken')

/**
 * @swagger
 * paths:
 *  /api/food:
 *      get:
 *          tags:
 *              - user
 *          sumarry: get all registers of the food
 *          description: get all registers of the food
 *          operationId: food
 *          responses:
 *              '200':
 *                  description: succesful operation
 *                  content:
 *                      application/json:
 *                          examples:
 *                              food:
 *                                  value:
 *                                      _id: '9980ce972cf9d26e43'
 *                                      Name: 'Arroz'
 *                                      qtd: 100
 *                                      Hc: 18.35
 *                                      state: true
 *
 *              '500':
 *                  description: server error
 *
 *
 */

export default verifyToken(userController.getAllFood)
