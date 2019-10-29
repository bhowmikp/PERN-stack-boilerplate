# PERN-stack-boilerplate

- Uses express-generator to create the backend.
- Nodemon is used so the server is restarted, npm start script is also modified.
- Winston is set up.  
- .env file can now be used.  
- libraries can now easily be checked to see if they are updated
- uses helmet, express-session, rate-limiting, cookie-expiry for security
- [Swagger](https://itnext.io/setting-up-swagger-in-a-node-js-application-d3c4d7aa56d4). Available in /api-docs
- VSCode install ESLint and Prettier. eslint --fix [filename] and Format document

Need to do:
- testing
- validator.js
- piplines (coverage testing, static code analysis, CI)
- ORM