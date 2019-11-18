const express = require('express');

const userRouter = express.Router();
const config = require('../config/index');

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
userRouter.get('/', (req, res) => {
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
userRouter.post('/test', (req, res) => {
  // console.log(req.body.username);
  res.status(200).send({
    status: 'OK',
  });
});

userRouter.get('/messages', config.authenticationRequired, (req, res) => {
  res.json({
    messages: 'Hello ' + req.jwt.claims.sub,
    jwt: req.jwt
  });
});

module.exports = userRouter;
