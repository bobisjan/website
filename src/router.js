import EmberRouter from '@ember/routing/router';
import { macroCondition, isTesting } from '@embroider/macros';

export default class Router extends EmberRouter {
  location = macroCondition(isTesting()) ? 'none' : 'history';
  rootURL = import.meta.env.BASE_URL;
}

Router.map(function () {});
