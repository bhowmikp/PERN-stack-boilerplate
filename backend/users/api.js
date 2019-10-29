const express = require('express');

const router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *      - Users
 *    name: Users
 *    summary: Responds with a resource
 *    consumes:
 *      - application/jsom
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: message displayed successfully
 */
router.get('/', (req, res) => {
  res.status(200).send({
    a: 1,
  });
});

/**
 * @swagger
 * /users/test:
 *  post:
 *    tags:
 *      - Users
 *    name: Add user
 *    summary: Adds a user
 *    consumes:
 *      - application/json
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: parameters
 *        required:
 *          - username
 */
router.post('/test', (req, res) => {
  // console.log(req.body.username);
  res.status(200).send({
    status: 'OK',
  });
});

module.exports = router;
