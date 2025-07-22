const ENV = {
  environment: import.meta.env.DEV ? 'development' : 'production',
  rootURL: import.meta.env.BASE_URL,
  locationType: 'history',
  APP: {
    // Here you can pass flags/options to your application instance
    // when it is created
  },
};

export default ENV;

export function enterTestMode() {
  ENV.locationType = 'none';
  ENV.APP.rootElement = '#ember-testing';
  ENV.APP.autoboot = false;
}
