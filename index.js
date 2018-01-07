require('./src/polyfills');

const cors = require('micro-cors')();
const serveStatic = require('./src/serve')(__dirname + '/dist');
const match = require('fs-router')(__dirname + '/routes');

module.exports = cors(async function(req, res) {
  let matched = match(req);
  if (matched) return await matched(req, res);
  return await serveStatic(req, res);
});
