import Application from 'ember-strict-application-resolver';
import setupInspector from '@embroider/legacy-inspector-support/ember-source-4.12';
import Router from './router.js';
import ApplicationInstance from '@ember/application/instance';
import { macroCondition, isTesting } from '@embroider/macros';

if (import.meta.env.SSR) {
  globalThis.window = globalThis;
}

export default class App extends Application {
  modules = {
    './router': { default: Router },
    ...import.meta.glob('./services/**/*', { eager: true }),
    ...import.meta.glob('./routes/**/*', { eager: true }),
    ...import.meta.glob('./templates/**/*', { eager: true }),
  };

  inspector = setupInspector(this);
}

ApplicationInstance.reopen({
  _bootSync(options = {}) {
    if (macroCondition(!isTesting())) {
      options._renderMode = import.meta.env.SSR ? 'serialize' : 'rehydrate';
    }
    return this._super(options);
  },
});
