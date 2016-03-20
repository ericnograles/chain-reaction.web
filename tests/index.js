// Require in mocha.css for Webpack
require('../node_modules/mocha/mocha.css');

var context = require.context('../src', true, /.+\.test\.js?$/);
context.keys().forEach(context);
module.exports = context;