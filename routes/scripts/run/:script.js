const { send } = require('micro');
const ansiCommandStream = require('../../../src/ansiCommandStream');

module.exports = async (req, res) => {
  const { params: { script } } = req;
  try {
    const { stream, kill } = ansiCommandStream({ args: ['run', script] });
    // stream.pipe(process.stdout);
    send(res, 200, stream);
    req.on('close', kill);
  } catch (err) {
    process.stderr.write(err.toString());
    send(res, 404, err);
  }
};
