const {send} = require('micro');
const hasYarn = require('has-yarn');
const execa = require('execa');

module.exports = async ({params: {dependency}, on}, res) => {
  try {
    const command = hasYarn() ? 'yarn' : 'npm';
    const {stdout, kill} = execa(command, ['add', dependency]);
    stdout.pipe(process.stdout);
    send(res, 200, stdout);
    on('close', kill);
  } catch (err) {
    send(res, 404, err);
  }
};
