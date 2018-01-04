const { send } = require('micro');
const hasYarn = require('has-yarn');
const execa = require('execa');

module.exports = async ({ params: { script }, on }, res) => {
  try {
    const command = hasYarn() ? 'yarn' : 'npm';
    const { stdout, kill } = execa(command, ['run', script]);
    stdout.pipe(process.stdout);
    send(res, 200, stdout);
    on('close', kill);
  } catch (err) {
    send(res, 404, err);
  }
};
