const hasYarn = require('has-yarn');
const execa = require('execa');
const merge = require('merge-stream');
const ansi = require('ansi-html-stream');
const _ = require('lodash');
const theme = {
  resets: {
    '0': false,
  },
  bold: {
    '1': { style: 'font-weight:bold' },
  },
  underline: {
    '4': { style: 'text-decoration:underline' },
  },
  foregrounds: {
    '30': { style: 'color:black' }, // black
    '31': { style: 'color:red' }, // red
    '32': { style: 'color:green' }, // green
    '33': { style: 'color:#FDE541' }, // yellow
    '34': { style: 'color:blue' }, // blue
    '35': { style: 'color:magenta' }, // magenta
    '36': { style: 'color:cyan' }, // cyan
    '37': { style: 'color:white' }, // white
    '39': false, // default
  },
  backgrounds: {
    '40': { style: 'background-color:black' }, // black
    '41': { style: 'background-color:red' }, // red
    '42': { style: 'background-color:green' }, // green
    '43': { style: 'background-color:yellow' }, // yellow
    '44': { style: 'background-color:blue' }, // blue
    '45': { style: 'background-color:magenta' }, // magenta
    '46': { style: 'background-color:cyan' }, // cyan
    '47': { style: 'background-color:white' }, // white
    '49': false, // default
  },
};

// use this function to adjust arguments to yarn or npm
const adjustArgument = arg => {
  switch (arg) {
    case 'remove':
      return 'uninstall';
    case 'add':
      return ['install', '--save'];
  }
};

module.exports = function ansiCommandStream({ args }) {
  const command = hasYarn() ? 'yarn' : 'npm';
  // adjust arguments only if needed (only if it hasn't yarn)
  const adjustedArguments = hasYarn()
    ? args
    : _.flatten(args.map(adjustArgument));

  const { stdout, stderr, kill } = execa(command, [
    // '--color="always"',
    ...adjustedArguments,
  ]);
  const stream = merge(stdout, stderr).pipe(ansi({ chunked: true, theme }));
  return { stream, kill };
};
