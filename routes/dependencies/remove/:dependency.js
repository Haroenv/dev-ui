const { send } = require('micro');
const hasYarn = require('has-yarn');
const execa = require('execa');

module.exports = async ({ params: { dependency }, on }, res) => {
  try {
    const command = hasYarn() ? 'yarn' : 'npm';
    const argument = hasYarn() ? 'remove' : 'rm';
    const { stdout, kill } = execa(command, [argument, dependency]);
    stdout.pipe(process.stdout);
    send(res, 200, stdout);
    on('close', kill);
  } catch (err) {
    send(res, 404, err);
  }
};
