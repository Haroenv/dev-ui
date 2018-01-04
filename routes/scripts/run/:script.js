const { send } = require('micro');
const hasYarn = require('has-yarn');
const execa = require('execa');
const merge = require('merge-stream');
const utf8Stream = require('utf8-stream');

module.exports = async (req, res) => {
  const { params: { script } } = req;
  try {
    const command = hasYarn() ? 'yarn' : 'npm';
    const { stdout, stderr, kill } = execa(command, ['run', script]);
    const stream = merge(stdout, stderr).pipe(utf8Stream());
    stream.pipe(process.stdout);
    send(res, 200, stream);
    req.on('close', kill);
  } catch (err) {
    process.stderr.write(err.toString());
    send(res, 404, err);
  }
};
