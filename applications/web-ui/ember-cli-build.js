'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
	'asset-cache': {
      include: [
        'assets/**/*',
        'ember-welcome-page/images/*'
      ]
    },
    'esw-cache-fallback': {
      patterns: [ '/' ],
      version: '1' // Changing the version will bust the cache
    }
  });

  return app.toTree();
};
