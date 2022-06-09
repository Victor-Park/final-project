const cookieSession = require('cookie-session');

const sessionMiddleware = cookieSession({
  name: 'session',
  keys: [process.env.COOKIE_SECRET]
});

module.exports = sessionMiddleware;
