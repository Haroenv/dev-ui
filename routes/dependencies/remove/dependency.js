const { send } = require('micro');
const hasYarn = require('has-yarn');
const ansiCommandStream = require('../../../src/ansiCommandStream');

module.exports = async (req, res) => {
  const { params: { dependency } } = req;
  try {
    const removeCommand = hasYarn() ? 'remove' : 'uninstall';
    const { stream, kill } = ansiCommandStream({
      args: [removeCommand, dependency],
    });
    send(res, 200, stream);
    req.on('close', kill);
  } catch (err) {
    send(res, 404, err);
  }
};

module.exports.path = '/dependencies/remove/:dependency';
