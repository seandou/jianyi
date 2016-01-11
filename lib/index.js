var Translator = require('./translator');

module.exports = function(words) {
  var t = new Translator();
  t.trans(words);
};