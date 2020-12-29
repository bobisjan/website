'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');
const compat = require('@embroider/compat');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    hinting: false,
  });

  return compat.compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
  });
};
