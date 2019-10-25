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
 *    produces:
 *      - application/json
 *    consumes:
 *      - application/jsom
 *    responses:
 *      '200':
 *        description: message displayed successfully
 */
router.get('/', (req, res) => {
  res.end(JSON.stringify({ a: 1 }));
});

module.exports = router;
