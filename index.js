const { send } = require('micro');
const cors = require('micro-cors')();

let match = require('fs-router')(__dirname + '/routes');

module.exports = cors(async function(req, res) {
  let matched = match(req);
  if (matched) return await matched(req, res);
  send(res, 404, { error: 'Not found' });
});
