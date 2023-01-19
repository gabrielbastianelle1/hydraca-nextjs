const userController = require('../../../src/controllers/controller.user')
const verifyToken = require('../../../src/middlewares/verifyToken')

/**
 * @swagger
 * paths:
 *  /api/registerbasal:
 *      post:
 *          tags:
 *              - user
 *          sumarry: add new register to database
 *          description: add new register to database
 *          operationId: addBasal
 *          requestBody:
 *              description: create register
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Basal'
 *                      examples:
 *                          insertbasal:
 *                              value:
 *                                  amountGlucose: '120'
 *                                  amountInsulinTotal: '12'
 *                                  date:  '20:01'
 *                                  time: '2000-01-01'
 *          responses:
 *              '200':
 *                  description: succesful operation
 *              '400':
 *                  description: invalid input
 *
 *
 */

export default verifyToken(userController.insertBasal)
