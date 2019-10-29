const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'Swagger API',
    version: '1.0.0',
    description: 'API endpoints',
  },
  host: 'localhost:3001',
  basePath: '/api-docs',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./*/api.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
