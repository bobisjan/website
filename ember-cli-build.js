'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');
const { compatBuild } = require('@embroider/compat');
const { prerender } = require('prember');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    hinting: false,

    babel: {
      sourceMaps: 'inline',
    },

    prember: {
      urls: ['/'],
    },
  });

  return prerender(
    app,
    compatBuild(app, Webpack, {
      staticAddonTestSupportTrees: true,
      staticAddonTrees: true,
      staticHelpers: true,
      staticModifiers: true,
      staticComponents: true,
      packagerOptions: {
        webpackConfig: {
          devtool: 'source-map',
        },
      },
    })
  );
};
