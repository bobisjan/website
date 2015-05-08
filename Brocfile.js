/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// import bootstrap
app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css.map', {
  destDir: 'assets'
});
app.import(app.bowerDirectory + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
  destDir: 'fonts'
});

module.exports = app.toTree();
