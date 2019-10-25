var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *      - Users
 *    name: Users
 *    summary: Responds with a resource
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/jsom
 *    responses:
 *      '200':
 *        description: message displayed successfully
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
