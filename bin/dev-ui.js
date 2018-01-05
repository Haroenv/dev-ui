#!/usr/bin/env node

const micro = require('micro');
const getPort = require('get-port');
const open = require('open');
const app = require('..');

getPort().then(port => {
  micro(app).listen(port);
  open(`http://127.0.0.1:${port}`);
});
