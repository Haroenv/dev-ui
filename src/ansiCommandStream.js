const hasYarn = require('has-yarn');
const execa = require('execa');
const merge = require('merge-stream');
const ansi = require('ansi-html-stream');


// use this function to adjust arguments to yarn or npm
const adjustSubCommand = arg => {
  switch (arg) {
    case 'remove':
      return 'uninstall';
    case 'add':
      return ['install', '--save'];
    default:
      return arg;
  }
};

module.exports = function ansiCommandStream({
  args: [subCommand, ...subCommandArgs],
}) {
  const command = hasYarn() ? 'yarn' : 'npm';
  // adjust arguments only if needed (only if it hasn't yarn)
  const adjustedArguments = [
    hasYarn() ? subCommand : adjustSubCommand(subCommand),
    subCommandArgs,
  ].flatten();

  const { stdout, stderr, kill } = execa(command, [
    // '--color="always"',
    ...adjustedArguments,
  ]);
  const stream = merge(stdout, stderr).pipe(ansi({ chunked: true }));
  return { stream, kill };
};
