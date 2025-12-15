import EmberRouter from '@embroider/router';
import { macroCondition, isTesting } from '@embroider/macros';

export default class Router extends EmberRouter {
  location = macroCondition(isTesting()) ? 'none' : 'history';
  rootURL = import.meta.env.BASE_URL;
}

// function bundle(name, loader) {
//   return {
//     names: [name],
//     async load() {
//       const [template, route, controller] = await Promise.all(loader());
//       const slashName = name.replaceAll('.', '/');
//       const results = {};

//       if (template) results[`./templates/${slashName}`] = template.default;
//       if (route) results[`./routes/${slashName}`] = route.default;
//       if (controller)
//         results[`./controllers/${slashName}`] = controller.default;

//       return {
//         default: results,
//       };
//     },
//   };
// }

// window._embroiderRouteBundles_ = [
//   bundle('index', () => [import('./templates/index.gts')]),
// ];

Router.map(function () {});
