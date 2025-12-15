import Application from 'ember-strict-application-resolver';
import setupInspector from '@embroider/legacy-inspector-support/ember-source-4.12';
import Router from './router.js';
import { clear } from './services/fastboot.js';

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

App.instanceInitializer(clear);
