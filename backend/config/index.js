const swaggerSpec = require('./swagger');
const logger = require('./winston');
const sendText = require('./twilio');
const sendEmail = require('./sendGrid');
const authenticationRequired = require('./okta');

module.exports = {
  authenticationRequired,
  sendEmail,
  sendText,
  swaggerSpec,
  winston: logger,
};
