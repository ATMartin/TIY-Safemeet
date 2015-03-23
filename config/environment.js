/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'safemeet',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    sassOptions: { outputFile: "safemeet.css" },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      twilio_test: 'testtest!'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' * https://maps.gstatic.com https://maps.googleapis.com 'unsafe-eval'",
      'font-src': "'self' *",
      'connect-src': "'self' *",
      'img-src': "'self' *",
      'style-src': "'self' 'unsafe-inline' *",
      'media-src': "'self' *"
    },
    'simple-auth': {
      authenticationRoute: 'user/login'
    },
    keys: {
      twilio_SID: 'AC5ea618dacee0512f771ca416a4072000',
      twilio_auth: '295c76eb5afad2daa90e4912d8bfd26f'
    }
  };
  
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
