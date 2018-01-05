const { send } = require('micro');
const ansiCommandStream = require('../../../src/ansiCommandStream');

module.exports = async (req, res) => {
  const { params: { dependency } } = req;
  try {
    const { stream, kill } = ansiCommandStream({ args: ['rm', dependency] });
    send(res, 200, stream);
    req.on('close', kill);
  } catch (err) {
    send(res, 404, err);
  }
};

module.exports.path = '/dependencies/remove/:dependency';
