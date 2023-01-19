const userController = require('../../../src/controllers/controller.user')
const verifyToken = require('../../../src/middlewares/verifyToken')

export default verifyToken(userController.getAllRegisters)

/**
 * @swagger
 * paths:
 *  /api/getallregisters:
 *      get:
 *          tags:
 *              - user
 *          sumarry: get all registers of the user
 *          description: get all registers of the user
 *          operationId: getallregisters
 *          responses:
 *              '200':
 *                  description: succesful operation
 *                  content:
 *                      application/json:
 *                          examples:
 *                              registers:
 *                                  value:
 *                                      _id: '63c949d960ce972cf9d26e43'
 *                                      User: '63c93d357d9f3c9e10da91f6'
 *                                      amountGlucose: 185
 *                                      amountInsulinHc: 18.35
 *                                      amountInsulinCorrection: 9.25
 *                                      amountInsulinTotal: 27.6
 *                                      nomeMeal: 'Café da Manha'
 *                                      state: true
 *                                      date: '2023-01-19'
 *                                      time: '13:46'
 *                                      amountHc: 367
 *                                      typeInsulin: 'Bolus'
 *              '500':
 *                  description: server error
 *
 *
 */
