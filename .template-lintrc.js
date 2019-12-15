'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    'no-curly-component-invocation': { allow: ['current-year'] },
    'no-implicit-this': { allow: ['current-year'] },
  },
};
