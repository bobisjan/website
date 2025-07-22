import './env.js';
import Application from 'ember-strict-application-resolver';
import Router from './router.js';
import { clear } from './services/fastboot.js';

export default class App extends Application {
  modules = {
    './router': { default: Router },
    ...import.meta.glob('./services/**/*', { eager: true }),
    ...import.meta.glob('./routes/**/*', { eager: true }),
    ...import.meta.glob('./templates/**/*', { eager: true }),
  };
}

App.instanceInitializer(clear);
