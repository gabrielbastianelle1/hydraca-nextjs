const userController = require('../../../src/controllers/controller.user')
const verifyToken = require('../../../src/middlewares/verifyToken')

/**
 * @swagger
 * paths:
 *  /api/registerbolus:
 *      post:
 *          tags:
 *              - user
 *          sumarry: add new register to database
 *          description: add new register to database
 *          operationId: addBolus
 *          requestBody:
 *              description: create register
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Bolus'
 *                      examples:
 *                          insertBolus:
 *                              value:
 *                                  degreeExercise: 'leve'
 *                                  timeExercise: '120'
 *                                  amountGlucose: '120'
 *                                  nameMeal: 'jantar'
 *                                  date:  '20:01'
 *                                  amountHc: '10'
 *                                  time: '2000-01-01'
 *          responses:
 *              '200':
 *                  description: succesful operation
 *              '400':
 *                  description: invalid input
 *
 *
 */

export default verifyToken(userController.insertBolus)
