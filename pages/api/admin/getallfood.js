const adminController = require('../../../src/controllers/controller.admin')

/**
 * @swagger
 * paths:
 *      /api/admin/getallfood:
 *     get:
 *      tags:
 *          - admin
 *                    summary: List Breweries
 *     description: Returns all Brewery documents
 *          content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/food'
 *                  description: verify token and return all data from user recurrent that token,
 *               responses:
 *                   '200':
 *                      description: json with user data
 */

export default adminController.getAllFood
