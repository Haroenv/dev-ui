const { send } = require('micro');
const hasYarn = require('has-yarn');
const execa = require('execa');
const merge = require('merge-stream');
const map = require('through2-map');
const stripAnsi = require('strip-ansi');

module.exports = async (req, res) => {
  const { params: { script } } = req;
  try {
    const command = hasYarn() ? 'yarn' : 'npm';
    const { stdout, stderr, kill } = execa(command, ['run', script]);
    const stream = merge(stdout, stderr);
    stream.pipe(process.stdout);
    send(res, 200, stream);
    req.on('close', kill);
  } catch (err) {
    process.stderr.write(err.toString());
    send(res, 404, err);
  }
};

// const removeAnsiFromStream = stream => {
//   return stream.pipe(map({ wantStrings: true }, stripAnsi));
// };
