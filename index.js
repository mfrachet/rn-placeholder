/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/prod');
} else {
  module.exports = require('./lib/dev');
}
