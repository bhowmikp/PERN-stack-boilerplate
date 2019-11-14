const swaggerSpec = require('./swagger');
const logger = require('./winston');
const sendText = require('./twilio');
const sendEmail = require('./sendGrid');
const authenticationRequired = require('./okta');
const corsOptions = require('./cors');

module.exports = {
  authenticationRequired,
  corsOptions,
  sendEmail,
  sendText,
  swaggerSpec,
  winston: logger,
};
