const swaggerSpec = require('./swagger');
const logger = require('./winston');

module.exports = {
  swaggerSpec,
  winston: logger,
};
