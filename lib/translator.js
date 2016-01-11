var path = require('path');
var fs = require('fs');
var request = require('request');

function Translator() {
  this.config = {};
  this.ua = 'NodeClient';

  var config = this.loadConfig();
  if (!config) {
    process.exit(1);
  }

  this.config = config;
}

Translator.prototype.trans = function(words, cb) {
  var self = this;
  var config = this.config;
  var options = {
    url: 'http://fanyi.youdao.com/openapi.do?keyfrom='+config.keyfrom+'&key='+config.key+'&type=data&doctype=json&version=1.1&q='+encodeURIComponent(words),
    headers: {
        'User-Agent': 'NodeClient'
    }
  };

  request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      self.printResults(data);

      if (cb) cb();
    }
  });
};

Translator.prototype.printResults = function(data) {
  if (data.basic === undefined) {
    output = [
      '',
      data.translation,
      ''
    ].join('\n');
  } else {
    output = [
      '',
      data.query + ' ' + data.basic.phonetic ? ('[' + data.basic.phonetic + ']') : '',
      data.translation,
      '--------------------'
    ].concat(data.basic.explains)
    .concat([
      ''
    ]).join('\n');
  }

  console.log(output);
};

Translator.prototype.loadConfig = function() {
  var homePath = process.env.HOME || process.env.USERPROFILE;
  var configFile = path.join(homePath, '.jianyi');

  if (!fs.existsSync(configFile)) {
    console.error('You need init jianyi fist.');
    return false;
  }

  var data = fs.readFileSync(configFile, 'utf8');
  var config = JSON.parse(data);

  return config;
};

module.exports = Translator;