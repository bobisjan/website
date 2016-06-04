/*jshint node:true*/
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'sass'
    },

    'ember-cli-bootstrap-sassy': {
      js: false
    }
  });

  return app.toTree();
};
