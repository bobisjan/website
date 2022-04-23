'use strict';

module.exports = function (target) {
  let ENV = {
    build: {
      environment: target,
      outputPath: 'dist',
    },
    s3: {
      bucket: 'bobisjan.com',
      region: 'eu-central-1',
      filePattern:
        '**/*.{html,js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,wasm,pdf}',
    },
  };

  return ENV;
};
