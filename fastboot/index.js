/* eslint-env node */
'use strict';

const FastBootAppServer = require('fastboot-app-server');

let server = new FastBootAppServer({
  distPath: 'dist'
});

server.start();
