const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

module.exports = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-9ski8908.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://contacts.azeem.com/',
  issuer: 'https://dev-9ski8908.us.auth0.com/',
  algorithms: ['RS256']
});