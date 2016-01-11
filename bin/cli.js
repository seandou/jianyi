#!/usr/bin/env node

'use strict';

var program = require('commander');
var appInfo = require('./../package.json');
var trans = require('../lib/index.js');

program
  .version(appInfo.version)
  .usage('[options] <words>')
  .parse(process.argv);

trans(program.args.join(' '));
