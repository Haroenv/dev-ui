#!/usr/bin/env node

require('micro')(require('..')).listen(4938);

require('open')('http://127.0.0.1:4938');
